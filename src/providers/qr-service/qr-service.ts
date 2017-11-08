import { Injectable } from '@angular/core';
import { ScanData } from '../../models/scan-data.model'
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class QRServiceProvider {

  private _historical: ScanData[] = [];
  constructor(private iab: InAppBrowser) {}

  add(qrData) {
    let data = new ScanData(qrData);
    // unshift new to old, push old to new
    this._historical.unshift(data);
    console.log(this._historical);
    this.openScan(0);
  }

  openScan(index: number) {
    let scanData = this._historical[index];
    console.log(scanData);
    switch(scanData.type) {
      case "http":
        this.iab.create(scanData.information, "_system");
      break

      default:
        console.error("Error", "Not Supported");
    }

  }

  getHistorical() {
    return this._historical;
  }
}
