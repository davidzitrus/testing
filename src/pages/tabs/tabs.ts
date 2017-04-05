import { Component } from '@angular/core';

//import { WelcomePage } from '../welcome/welcome';
import { DetailPage } from '../detail/detail';
import { CalendarPage } from '../calendar/calendar';
import { RequestPage } from '../request/request';
import { ChatPage } from '../chat/chat';
import { FriendsPage } from '../friends/friends';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  //tab1Root: any = WelcomePage;
  tab2Root: any = DetailPage;
  tab3Root: any = CalendarPage;
  tab4Root: any = RequestPage;
  tab5Root: any = ChatPage;
  tab6Root: any = FriendsPage;

  constructor() {

  }
}
