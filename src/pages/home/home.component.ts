import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePageComponent {

  constructor(private barcodeScanner: BarcodeScanner, public toastCtrl: ToastController) {

  }

  presentToast(data: string) {
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
     console.log("Data", barcodeData);
    }, (err) => {
        // An error occurred
        console.error("Error", err);
        this.presentToast(err);
    });
  }
}
