import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'ts-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent {

  @Input()
  public title: string = '';

  @Input()
  public dropdownList: { label: string | number, value: string | number }[] = [];

  @Output()
  public onSelect: EventEmitter<any> = new EventEmitter<any>();

  public isDropdownShowed: boolean = false;

  public selectedValue: string = 'Value'

  public number!: number;


  public showDropdownList(item?: any): void {
    if (item) {
      this.number = this.dropdownList.indexOf(item)
    }

    if (item?.label) {
      this.selectedValue = item?.label;
      this.onSelect.emit(item)
    }
    this.isDropdownShowed = !this.isDropdownShowed
  }


}
