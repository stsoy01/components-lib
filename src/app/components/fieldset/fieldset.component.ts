import { Component, Input } from "@angular/core";

@Component({
  selector: 'ts-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss']
})

export class FieldsetComponent {
  @Input()
  public legend:string = ''
}
