import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'field-page',
  templateUrl: './field-page.component.html',
  styleUrls: ['./field-page.component.scss']
})

export class FieldpageComponent {

  public selectedSection: string | number = 'Preview'

  public selectedSwitchSection(section: string | number): void {
    this.selectedSection = section;
  }


}
