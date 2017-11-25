import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPageComponent {

  latitude: number;
  longitude: number;
  zoom: number;

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
    this.latitude = 40.4521419;
    this.longitude = -3.6903855000000476;
    this.zoom = 15;
    console.log("cords", this.navParams.get("coords"));
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
