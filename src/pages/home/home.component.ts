import { Component } from '@angular/core';
import { ToastController, Platform } from 'ionic-angular'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRServiceProvider } from '../../providers/qr-service/qr-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePageComponent {

  constructor(
    private barcodeScanner: BarcodeScanner,
    public toastCtrl: ToastController,
    private platform: Platform,
    private _qrService: QRServiceProvider) {

  }

  presentToast(data: string) {
    console.log("Init Scan");
    if(!this.platform.is('cordova')) {
      // this._qrService.add("https://google.es");
      // this._qrService.add("geo:9.976133040865312, -84.006774790551");
      this._qrService.add( `BEGIN:VCARD
VERSION:2.1
N:Kent;Clark
FN:Clark Kent
ORG:
TEL;HOME;VOICE:12345
TEL;TYPE=cell:67890
ADR;TYPE=work:;;;
EMAIL:clark@superman.com
END:VCARD`);
//this._qrService.add("MATMSG:TO:adrianrl@outlook.es;SUB:Prueba;BODY:Prueba;;");
      return;
    }
    let toast = this.toastCtrl.create({
      message: data,
      duration: 5000,
      position: 'top'
    })
    toast.present();
  }

  scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
     // Success! Barcode data is here
     console.log("Data ", barcodeData);
     console.log("Result: ", barcodeData.text);
     console.log("Format: ", barcodeData.format);
     console.log("Cancelled: ", barcodeData.cancelled);
     if(!barcodeData.cancelled && barcodeData.text !== null) {
      this._qrService.add(barcodeData.text);
     }
    }, (err) => {
        // An error occurred
        console.error("Error", err);
        this.presentToast(err);
    });
  }
}
