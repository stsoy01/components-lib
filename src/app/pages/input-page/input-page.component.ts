import { Component } from "@angular/core";

@Component({
  selector: 'input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})

export class InputpageComponent {
  public selectedSection: string | number = 'Preview';

  public selectedSwitchSection(section: string | number): void {
    this.selectedSection = section;
  }

  public get1(data: any): void {
    console.log('data1', data);
  }

  public get2(data: any): void {
    console.log('country', data);
  }

}
