import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricalPageComponent } from './historical.component';

@NgModule({
  declarations: [
    HistoricalPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(HistoricalPageComponent),
  ],
})
export class HistoricalPageModule {}
