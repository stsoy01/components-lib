import { Component } from "@angular/core";

@Component({
  selector: 'fieldset-page',
  templateUrl: './fieldset-page.component.html',
  styleUrls: ['./fieldset-page.component.scss']
})

export class FieldsetpageComponent {
  public selectedSection: string | number = 'Preview'

  public selectedSwitchSection(section: number | string): void {
    this.selectedSection = section;
  }
}
