import { Component } from '@angular/core';

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
  tab1Root: any = DetailPage;
  tab2Root: any = CalendarPage;
  tab3Root: any = RequestPage;
  tab4Root: any = ChatPage;
  tab5Root: any = FriendsPage;

  constructor() {

  }
}
