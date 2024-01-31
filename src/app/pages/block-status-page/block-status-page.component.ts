import {Component} from "@angular/core";

@Component({
  selector: 'block-status-page',
  templateUrl: './block-status-page.component.html',
  styleUrls: ['./block-status-page.component.scss']
})

export class BlockstatuspageComponent {

  public selectedSwitchSection: string | number = 'Preview'

  public getSelecteSection(section: string | number): void {
    this.selectedSwitchSection = section;
  }

}
