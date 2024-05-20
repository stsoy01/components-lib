import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'ts-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})

export class SelectComponent {

  @Input()
  public title: string = '';

  @Input()
  public dropdownList: any[] = [];

  @Output()
  public onSelect: EventEmitter<any> = new EventEmitter<any>();

  public isDropdownShowed: boolean = false;

  @Input()
  public placeholder: string = ' '

  public number!: number;

  public showDropdownList(item?: any): void {
    if (item) {
      this.number = this.dropdownList.indexOf(item)
    }

    if (item?.label) {
      this.placeholder = item?.label;
      this.onSelect.emit(item)
    }
    this.isDropdownShowed = !this.isDropdownShowed
  }

  public outOfSelectDetection(): void {
    this.isDropdownShowed = false;
  }

}
