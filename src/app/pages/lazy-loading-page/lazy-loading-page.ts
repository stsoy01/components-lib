import {Component} from "@angular/core";

@Component({
  selector: 'lazy-loading-page',
  templateUrl: './lazy-loading-page.html',
  styleUrls: ['./lazy-loading-page.scss']
})

export class LazyLoadingPage {
  public selectedSection: string | number = 'Preview';

  public selectedSwitchSection(section: string | number): void {
    this.selectedSection = section;
  }
}
