import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


import { MyApp } from './app.component';
import { HomePageComponent, TabsPageComponent, ModalPageComponent, HistoricalPageComponent } from '../pages/index';

@NgModule({
  declarations: [
    MyApp,
    HomePageComponent,
    TabsPageComponent,
    ModalPageComponent,
    HistoricalPageComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePageComponent,
    TabsPageComponent,
    ModalPageComponent,
    HistoricalPageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
