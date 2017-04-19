import { Component } from '@angular/core';
import { Facebook, NativeStorage } from 'ionic-native';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { ViewChild } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/angular2';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
 public vorname: string;
      public nachname: string;
      public data: string;
      user: string;
      pw: string;
    rootPage: any = WelcomePage;
    //@ViewChild('navRoot') navCtrl: NavController;
    FB_APP_ID: number = 407015042998857;

    constructor(public navCtrl: NavController, public http: Http) {
        Facebook.browserInit(this.FB_APP_ID, "v2.8");
    }

 forward() {
          this.navCtrl.push(TabsPage);
      }

      authenticate() {
          //hier ohne methode?

          var user = String((<HTMLInputElement>document.getElementById('username')).value);
          var pw = String((<HTMLInputElement>document.getElementById('password')).value); 

          var creds = { username: user, password: pw };
          //var creds = { username: 'user1', password: 'pw1' };
        

          var headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded');

          this.http.post('http://www.orga-nicer.org/organice/selectjson.php', creds, {
              headers: headers
          })
              .map(res => res.json().Person) // extract object

              .subscribe(
              data => this.data = data, // here! paste res into variable data
              err => this.logError(err),
              () => console.log('Completed')
              );
          //hier json gedruckt
          //console.log("data: " + JSON.stringify(this.data));

          //funktioniert nicht
         // let parsedjson = JSON.parse(this.data);

          //console.log("data: " + parsedjson[0] );
          //(<HTMLInputElement>document.getElementById('test')).value = this.data;
      }
    

      logError(err) {
          console.error('There was an error: ' + err);
      }

      add() {
          //hier ohne methode?

          var user = String((<HTMLInputElement>document.getElementById('username')).value);
          var pw = String((<HTMLInputElement>document.getElementById('password')).value);
          var vn = String((<HTMLInputElement>document.getElementById('vorname')).value);
          var nn = String((<HTMLInputElement>document.getElementById('nachname')).value);

          var creds = { username: user, password: pw, vorname: vn, nachname: nn };
          //var creds = { username: 'user1', password: 'pw1' };


          var headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded');

          this.http.post('http://www.orga-nicer.org/organice/insertjson.php', creds, {
              headers: headers
          })
              .map(res => res.json().Person) // extract object

              .subscribe(
              data => this.data = data, // here! paste res into variable data
              err => this.logError(err),
              () => console.log('Completed')
              );
          //hier json gedruckt
          //console.log("data: " + JSON.stringify(this.data));

          //funktioniert nicht
          // let parsedjson = JSON.parse(this.data);

          //console.log("data: " + parsedjson[0] );
          //(<HTMLInputElement>document.getElementById('test')).value = this.data;
         // this.authenticate();
      }

    doFbLogin() {
        let permissions = new Array();
        let nav = this.navCtrl;
        //the permissions your facebook app needs from the user
        permissions = ["public_profile"];


        Facebook.login(permissions)
            .then(function (response) {
                let userId = response.authResponse.userID;
                let params = new Array();

                //Getting name and gender properties
                Facebook.api("/me?fields=name,gender", params)
                    .then(function (user) {
                        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                        //now we have the users info, let's save it in the NativeStorage
                        NativeStorage.setItem('user',
                            {
                                name: user.name,
                                gender: user.gender,
                                picture: user.picture
                            })
                            .then(function () {
                                nav.push(DetailPage);
                            }, function (error) {
                                console.log(error);
                            })
                    })
            }, function (error) {
                console.log(error);
            });
    }
}