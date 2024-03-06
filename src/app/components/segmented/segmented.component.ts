import { AfterViewInit, Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
  selector: 'ts-segmented',
  templateUrl: './segmented.component.html',
  styleUrls: ['./segmented.component.scss']
})

export class SegmentedComponent implements AfterViewInit {

  @Input()
  public id!: string;
  @Input()
  public class!: string;
  @Input()
  public segments: string[] = []
  @Output()
  public onClick: EventEmitter<string> = new EventEmitter<string>();

  public leftOffset!: number;
  public elementWidth!: number;

  public ngAfterViewInit(): void {
    const el = document.getElementById(this.id);
    const firstElement = document.getElementsByClassName(this.class)[0].firstChild as HTMLElement;
      
    const firstElementWidth = firstElement.offsetLeft + 5
    el!.style.left = `${firstElementWidth}px`
    el!.style.width = `${firstElement.clientWidth - 10}px`;
  }

  public setSegmentBackground(segment: any, value: string): void {
    this.leftOffset = segment.target.offsetLeft + 5;
    this.elementWidth = segment.target.clientWidth - 10
    const el = document.getElementById(this.id);

    el!.style.left = `${this.leftOffset}px`
    el!.style.width = `${this.elementWidth}px`
    this.onClick.emit(value)
    

  }

}
