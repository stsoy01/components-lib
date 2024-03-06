import {AfterViewInit, Component, Input, Output, EventEmitter, ViewChild, ElementRef} from "@angular/core";


@Component({
  selector: 'ts-segmented',
  templateUrl: './segmented.component.html',
  styleUrls: ['./segmented.component.scss']
})

export class SegmentedComponent implements AfterViewInit {

  @Input()
  public class!: string;
  @Input()
  public segments: string[] = []
  @Output()
  public onClick: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('background')
  public background: ElementRef | undefined;
  @ViewChild('segment')
  public segment: ElementRef | undefined;

  public leftOffset!: number;
  public elementWidth!: number;

  public ngAfterViewInit(): void {
    const firstElement = this.segment!.nativeElement;

    const firstElementWidth = firstElement.offsetLeft + 5
    this.background!.nativeElement.style.left = `${firstElementWidth}px`
    this.background!.nativeElement.style.width = `${firstElement.clientWidth - 10}px`;
  }

  public setSegmentBackground(segment: any, value: string): void {
    this.leftOffset = segment.target.offsetLeft + 5;
    this.elementWidth = segment.target.clientWidth - 10
    //
    this.background!.nativeElement.style.left = `${this.leftOffset}px`
    this.background!.nativeElement.style.width = `${this.elementWidth}px`
    this.onClick.emit(value)


  }

}
