import { Component } from "@angular/core";

@Component({
  selector: 'select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.scss']
})

export class SelectpageComponent {
  public selectedSection: number | string = 'Preview';

  public selectedSwitchSection(setcion: string | number): void {
    this.selectedSection = setcion;
  }
}
