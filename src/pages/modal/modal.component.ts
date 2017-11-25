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
<<<<<<< HEAD
    // Getting coords
    let coords = navParams.get("coords").split(",");
    this.latitude = Number(coords[0].replace("geo:", ""));
    this.longitude = Number(coords[1].replace("geo:", ""));
=======
    let coords = navParams.get("coords").split();
    this.latitude = coords[0];
    this.longitude = coords[1];
>>>>>>> 792381a1c7017d0322e4f01f1c1aea9a7785f465
    this.zoom = 15;
    console.log("cords", this.navParams.get("coords"));
    console.log("latitude", this.latitude);
    console.log("longitude", this.longitude);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
