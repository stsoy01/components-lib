import { Component } from "@angular/core";

type SectionTypes = 'Preview' | 'TypeSctript' | 'HTML' | string


@Component({
  selector: 'calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss']
})

export class CalendarpageComponent {
  public selectedDate!: any;

  public selectedSwitchSection: number | string = 'Preview'

  public getSelecteSection(section: number | string): void {
    this.selectedSwitchSection = section;
  }

  public selectDay(day: any): void {
    this.selectedDate = new Date(day).toLocaleDateString()
  }
}
