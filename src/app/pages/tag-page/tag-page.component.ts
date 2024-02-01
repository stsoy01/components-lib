import {Component} from "@angular/core";

@Component({
  selector: 'tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.scss']
})

export class TagpageComponent {

  public selectedSwitchSection: string | number = 'Preview'

  public switchSection(section: string | number): void {
    this.selectedSwitchSection = section;
  }

}
