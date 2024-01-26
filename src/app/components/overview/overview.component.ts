import { Component } from "@angular/core";

@Component({
  selector: 'ts-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewCompomponent {


  public section: string = '1'

  public switchSection(section: string): void {
    this.section = section;
  }

}
