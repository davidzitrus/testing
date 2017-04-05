import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FriendsPage } from '../friends/friends';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
    constructor(public navCtrl: NavController  ) {

    }

    forward() {
        this.navCtrl.push(TabsPage);
    }
}
