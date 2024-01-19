import {Component, Input} from "@angular/core";

export interface AccordionData {
  title: string;
  text: string;
}

@Component({
  selector: 'ts-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent {

  @Input()
  public data: AccordionData[] = []

  @Input()
  public rounded = false;

  public isOpened: number | undefined;

  public openDescription(index: number): void {
    this.isOpened = index ?? undefined
  }
}
