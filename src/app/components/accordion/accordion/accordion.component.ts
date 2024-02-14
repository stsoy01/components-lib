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

  public openedSlideIndex: number | undefined;
  public isOpened: boolean = false;

  public openDescription(index: number): void {

    if (this.openedSlideIndex !== index) {
      this.openedSlideIndex = index;
      this.isOpened = true
    } else {
      this.isOpened = !this.isOpened
      this.openedSlideIndex = undefined;
    }
  }

}
