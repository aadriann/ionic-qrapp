import { Component } from '@angular/core';
import { QRServiceProvider } from '../../providers/qr-service/qr-service'
import { ScanData } from '../../models/scan-data.model'

@Component({
  selector: 'page-historical',
  templateUrl: 'historical.html',
})
export class HistoricalPageComponent {

  historical: ScanData[] = [];

  constructor(private _qrService: QRServiceProvider) {}

  ionViewDidLoad() {
    this.historical = this._qrService.getHistorical();
  }

  openScan(index: number) {
    this._qrService.openScan(index);
  }

}
