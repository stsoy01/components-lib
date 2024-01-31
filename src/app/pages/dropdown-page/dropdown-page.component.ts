import { Component } from "@angular/core";

@Component({
  selector: 'dropdown-page',
  templateUrl: './dropdown-page.component.html',
  styleUrls: ['./dropdown-page.component.scss']
})

export class DropdownpageComponent {
  public selectedSection: string | number = 'Preview'

  public selectedSwitchSection(section: string | number): void {
    this.selectedSection = section;
  }

}
