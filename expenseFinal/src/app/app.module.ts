import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../home/home';
// import the page
import { AddexpensePage } from './addexpense/addexpense';

declarations: [
  MyApp,
  HomePage,
// add
  AddexpensePage
],
imports: [
  BrowserModule,
  IonicModule.forRoot(MyApp)
],
bootstrap: [IonicApp],
entryComponents: [
  MyApp,
  HomePage,
// add
  AddexpensePage
],
providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
]
})

export class AppModule {}