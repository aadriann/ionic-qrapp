import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPageComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(ModalPageComponent),
  ],
})
export class ModalPageModule {}
