import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Facebook, NativeStorage } from 'ionic-native';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
    user: any;
    userReady: boolean = false;
  constructor(public navCtrl: NavController) {

  }
  ionViewCanEnter() {
      let env = this;
      NativeStorage.getItem('user')
          .then(function (data) {
              env.user = {
                  name: data.name,
                  gender: data.gender,
                  picture: data.picture
              };
              env.userReady = true;
          }, function (error) {
              console.log(error);
          });
  }

  forward() {
      this.navCtrl.push(WelcomePage);
  }


  doFbLogout() {
      var nav = this.navCtrl;
      Facebook.logout()
          .then(function (response) {
              //user logged out so we will remove him from the NativeStorage
              NativeStorage.remove('user');
              nav.push(WelcomePage);
          }, function (error) {
              console.log(error);
          });
      this.forward();
  }


}