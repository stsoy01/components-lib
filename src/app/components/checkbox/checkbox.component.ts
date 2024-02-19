import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
  selector: 'ts-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent {
  @Input()
  public label: string = '';

  @Input()
  public disabled!: boolean;

  @Output()
  public onChecked: EventEmitter<any> = new EventEmitter<any>()

  public getCheckBox(data: any): void {
    this.onChecked.emit(data.target.checked)
  }
}
