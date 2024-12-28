import {Component, Input, ChangeDetectionStrategy, OnDestroy} from "@angular/core";

export interface AccordionData {
  title: string;
  text: string;
}

@Component({
  selector: 'ts-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AccordionComponent implements OnDestroy{

  @Input()
  public data: AccordionData[] = []

  @Input()
  public rounded = false;

  public openedSlideIndex: number | undefined;
  public isOpened: boolean = false;
  public lastRounded!: any;

  // @HostListener('click')
  public openDescription(index: number): void {
    this.lastRounded = document.getElementsByClassName('lastRounded');
    document.getElementsByClassName('lastRounded')[this.lastRounded.length - 1].classList.add('lastRoundedAdd')

    if (this.openedSlideIndex !== index) {
      this.openedSlideIndex = index;
      this.isOpened = true
    } else {
      this.isOpened = !this.isOpened
      this.openedSlideIndex = undefined;
    }
  }

  public ngOnDestroy(): void {
    this.lastRounded.parentNode.removeChild(this.lastRounded);
  }

}
