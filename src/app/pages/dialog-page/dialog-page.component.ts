import { Component } from "@angular/core";
import { DialogService } from "src/app/components/dialog/dialog.service";

@Component({
  selector: 'dialog-page-component',
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.scss']
})

export class DialogpageComponent {

  constructor(public dialogService: DialogService) { }

  public selectedSection: string | number = 'Preview'

  public selectedSwitchSection(section: number | string): void {
    this.selectedSection = section;
  }
}
