
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/angular2';

  import { NavController } from 'ionic-angular';
  import { TabsPage } from '../tabs/tabs';
  import { FriendsPage } from '../friends/friends';

  @Component({
      selector: 'page-welcom',
      templateUrl: 'welcome.html'

  })
  export class WelcomePage {
      public vorname: string;
      public nachname: string;
      public data: string;
      user: string;
      pw: string;
   
      constructor(public navCtrl: NavController, public http: Http) {
          let Indata : String[] = [ 'username : user1', 'password : pw1' ];
          this.vorname = "david";
          this.nachname = "mit";
          //this.authenticate();
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
  }
