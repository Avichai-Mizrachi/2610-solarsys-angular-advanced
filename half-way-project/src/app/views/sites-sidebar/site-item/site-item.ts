import { Component, input, output } from '@angular/core';
import { SidebarSiteVm } from '../../../view-models/sidebar.vm';

@Component({
  imports: [],
  selector: 'app-site-item',
  styleUrl: './site-item.css',
  templateUrl: './site-item.html',
  host: {
    '[class.selected]': 'site().selected',
    '(click)': 'selectSite.emit()',
  },
})
export class SiteItem {
  readonly site = input.required<SidebarSiteVm>();

  readonly selectSite = output();
}
