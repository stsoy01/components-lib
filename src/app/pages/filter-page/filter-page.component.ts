import { Component } from "@angular/core";

@Component({
  selector: 'filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss']
})

export class FilterpageComponent {
  public selectedSection: string | number = 'Preview';

  public selectedSwitchSection(section: string | number): void {
    this.selectedSection = section;
  }
}
