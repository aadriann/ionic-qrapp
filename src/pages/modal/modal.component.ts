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
    let coords = navParams.get("coords").split();
    this.latitude = coords[0];
    this.longitude = coords[1];
    this.zoom = 15;
    console.log("cords", this.navParams.get("coords"));
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
