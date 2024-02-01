import { Component, Input } from "@angular/core";

@Component({
  selector: 'ts-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent {

  @Input()
  public title: string = '';

  @Input()
  public dropdownList: { label: string | number, value: string | number }[] = [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 },
  ];

  public isDropdownShowed: boolean = false;

  public selectedValue: string = 'Value'

  constructor() { }

  public showDropdownList(item?: any): void {
    if (item?.label) {
      this.selectedValue = item?.label;
    }
    this.isDropdownShowed = !this.isDropdownShowed
  }

}
