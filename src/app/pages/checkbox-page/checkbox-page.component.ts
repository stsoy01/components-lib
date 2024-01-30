import { Component } from "@angular/core";

@Component({
  selector: 'checkbox-page',
  templateUrl: './checkbox-page.component.html',
  styleUrls: ['./checkbox-page.component.scss']
})

export class CheckboxpageComponent {

  public selectedSwitchSection: number | string = 'Preview';

  public getSelecteSection(section: string | number): void {
    this.selectedSwitchSection = section;
  }

}
