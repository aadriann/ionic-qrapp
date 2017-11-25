import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPageComponent {

  latitude: number;
  longitude: number;
  zoom: number;

  constructor(public navParams: NavParams) {
    this.latitude = 40.4521419;
    this.longitude = -3.6903855000000476;
    this.zoom = 15;
  }
}
