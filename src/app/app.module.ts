import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { CalendarPage } from '../pages/calendar/calendar';
import { RequestPage } from '../pages/request/request';
import { DetailPage } from '../pages/detail/detail';
import { ChatPage } from '../pages/chat/chat';
import { FriendsPage } from '../pages/friends/friends';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
      MyApp,
      WelcomePage,
    RequestPage,
	ChatPage,
	FriendsPage,
    CalendarPage,
    DetailPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      WelcomePage,
    RequestPage,
    ChatPage,
	FriendsPage,
	CalendarPage,
    DetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
