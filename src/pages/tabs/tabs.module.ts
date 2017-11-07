import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPageComponent } from './tabs.component';

@NgModule({
  declarations: [
    TabsPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(TabsPageComponent),
  ],
})
export class TabsPageModule {}
