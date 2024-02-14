import {Component} from "@angular/core";

@Component({
  selector: 'progressing-page',
  templateUrl: './progressing-page.component.html',
  styleUrls: ['./progressing-page.component.scss']
})

export class ProgressingpageComponent {

  public selectedSwitchSection: string | number = 'Preview'
  public getSelectedSection(section: string | number): void {
    this.selectedSwitchSection = section;
  }
}
