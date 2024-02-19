import {Component, Input} from "@angular/core";

@Component({
  selector: 'ts-segmented',
  templateUrl: './segmented.component.html',
  styleUrls: ['./segmented.component.scss']
})

export class SegmentedComponent {

  @Input()
  public segmentList: any[] = [{name: 'Incoming'}, {name: 'Outgoing'}, {name: 'Default'}]

  public selectedSegment!: number;

  public selectSegment(segment: any, index: number, event: any) {
    console.log(index)
    console.log(segment)
    console.log(event)
    this.selectedSegment = this.segmentList.indexOf(segment);
  }

}
