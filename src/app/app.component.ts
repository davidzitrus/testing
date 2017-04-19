import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';


import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { DetailPage } from '../pages/detail/detail';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = WelcomePage;

    constructor(NativeStorage: NativeStorage, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Here we will check if the user is already logged in
            // because we don't want to ask users to log in each time they open the app
            let env = this;
            NativeStorage.getItem('user')
                .then((data) => {
                    // user is previously logged and we have his data
                    // we will let him access the app
                    this.rootPage = DetailPage;
                    splashScreen.hide();
                }, (error) => {
                    //we don't have the user data so we will ask him to log in
                    this.rootPage = WelcomePage;
                    splashScreen.hide();
                });

            statusBar.styleDefault();
        });
    }
}