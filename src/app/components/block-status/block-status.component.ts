import {Component, Input} from "@angular/core";

type statusTypes = 'error' | '404' | 'warning'

@Component({
  selector: 'ts-block-status',
  templateUrl: './block-status.component.html',
  styleUrls: ['./block-status.component.scss']
})

export class BlockStatusComponent {

  @Input()
  public status!: statusTypes;

}
