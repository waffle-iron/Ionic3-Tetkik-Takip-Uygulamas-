import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ListePage} from '../pages/liste/liste';
import { HosgeldinizPage } from '../pages/hosgeldiniz/hosgeldiniz';
import { TetkikProvider } from '../providers/tetkik/tetkik';
import { DenePage } from '../pages/dene/dene';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListePage,
    DenePage,
    HosgeldinizPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListePage,
    DenePage,
    HosgeldinizPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TetkikProvider
  ]
})
export class AppModule {}
