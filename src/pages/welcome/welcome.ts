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


      tabBarElement: any;

    //@ViewChild('navRoot') navCtrl: NavController;
    FB_APP_ID: number = 407015042998857;

    constructor(public navCtrl: NavController, public http: Http) {
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
      
       
        Facebook.browserInit(this.FB_APP_ID, "v2.8");
    }
    ionViewWillEnter() {
        this.tabBarElement.style.display = 'none';
    }

    ionViewWillLeave() {
        this.tabBarElement.style.display = 'flex';
    }
    takeMeBack() {
        this.navCtrl.parent.select(0); // navigiert zu view nummer x aus tabs.html
    }

 forward() {
          this.navCtrl.push(TabsPage);
      }

      authenticate() {
 
          var user = String((<HTMLInputElement>document.getElementById('username')).value);
          var pw = String((<HTMLInputElement>document.getElementById('password')).value); 

          var creds = { username: user, password: pw };

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
      }
    

      logError(err) {
          console.error('There was an error: ' + err);
      }

      add() {

          var user = String((<HTMLInputElement>document.getElementById('username')).value);
          var pw = String((<HTMLInputElement>document.getElementById('password')).value);
          var vn = String((<HTMLInputElement>document.getElementById('vorname')).value);
          var nn = String((<HTMLInputElement>document.getElementById('nachname')).value);

          var creds = { username: user, password: pw, vorname: vn, nachname: nn };

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