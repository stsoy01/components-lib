import {Component} from "@angular/core";

@Component({
  selector: 'segmented-page',
  templateUrl: './segmented-page.component.html',
  styleUrls: ['./segmented-page.component.scss']
})

export class SegmentedpageComponent {
  public selectedSwitchSection: string | number = 'Preview'

  public getSelectedSection(section: string | number): void {
    this.selectedSwitchSection = section;
  }
}
