import {Component, Input, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'ts-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})

export class FieldComponent {
  @Input()
  public name: string = 'Field';
}
