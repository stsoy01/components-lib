import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'segmented-page',
  templateUrl: './segmented-page.component.html',
  styleUrls: ['./segmented-page.component.scss']
})

export class SegmentedpageComponent {
  constructor(private router: Router) {
  }

  public selectedSwitchSection: string | number = 'Preview'

  public getSelectedSection(section: string | number): void {
    this.selectedSwitchSection = section;
  }

  public getSegment(segment: string): void {
    this.router.navigateByUrl(segment.toLowerCase().split(' ').join('')).then()
  }
}
