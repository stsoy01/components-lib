import {
  Component,
  EventEmitter,
  Input, Output
} from "@angular/core";


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true
})

export class CheckboxComponent {
  @Input()
  public label: string = '';

  @Input()
  public disabled: boolean = false;
  @Input()
  public is_checked: boolean = false;

  @Output()
  public getValue: EventEmitter<boolean> = new EventEmitter<boolean>()

  public __isChecked(val: boolean): void {
    if(this.disabled) return
    this.is_checked = !val;
    this.getValue.emit(this.is_checked)
  }
}
