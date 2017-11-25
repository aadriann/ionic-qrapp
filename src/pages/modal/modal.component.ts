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
    let coords = navParams.get("coords").split(",");
    this.latitude = Number(coords[0].replace("geo:", ""));
    this.longitude = Number(coords[1].replace("geo:", ""));
    this.zoom = 15;
    console.log("cords", this.navParams.get("coords"));
    console.log("latitude", this.latitude);
    console.log("longitude", this.longitude);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
