import { Injectable } from '@angular/core';
import { ScanData } from '../../models/scan-data.model'
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ModalController } from "ionic-angular"
import { ModalPageComponent } from "../../pages/modal/modal.component"

@Injectable()
export class QRServiceProvider {

  private _historical: ScanData[] = [];
  constructor(private iab: InAppBrowser, private modalCtrl: ModalController) {}

  add(qrData) {
    let data = new ScanData(qrData);
    // unshift new to old, push old to new
    this._historical.unshift(data);
    console.log(this._historical);
    this.openScan(0);
  }

  openScan(index: number) {
    let scanData = this._historical[index];
    console.log("Information", scanData.information);
    console.log("Type", scanData.type);
    switch(scanData.type) {
      case "http":
        this.iab.create(scanData.information, "_system");
      case "map":
        this.modalCtrl.create(ModalPageComponent, { coords: scanData.information }).present();
      break

      default:
        console.error("Error", "Not Supported");
    }

  }

  getHistorical() {
    return this._historical;
  }
}
