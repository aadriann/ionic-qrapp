import { Component } from '@angular/core';
import { HomePageComponent, HistoricalPageComponent } from "../index"

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPageComponent {

  tabHome: any = HomePageComponent;
  tabHistorical: any = HistoricalPageComponent;

  constructor() {}
}
