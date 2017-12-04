import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AgmCoreModule } from '@agm/core';
import { Contacts } from '@ionic-native/contacts';
import { EmailComposer } from '@ionic-native/email-composer';

import { MyApp } from './app.component';
import { HomePageComponent, TabsPageComponent, ModalPageComponent, HistoricalPageComponent } from '../pages/index';
import { QRServiceProvider } from '../providers/qr-service/qr-service';

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
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDv6qwGx0MVmqTsyuVGxXI9XInvvUzoprQ'
    })
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
    InAppBrowser,
    Contacts,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QRServiceProvider
  ]
})
export class AppModule {}
