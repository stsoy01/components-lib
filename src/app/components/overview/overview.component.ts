import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'ts-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewCompomponent {

  @Input()
  public linkList: string[] = [];
  @Output()
  public selectedSection: EventEmitter<number | string> = new EventEmitter<any>()


  public switchSection(section: number | string): void {
    this.selectedSection.emit(section)
  }

}
