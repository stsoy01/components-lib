import { Component, ElementRef, Input, Renderer2, ViewChild } from "@angular/core";

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

  public isDropdownShowed: boolean = false;

  public selectedValue: string = 'Value'



  public showDropdownList(item?: any): void {
    if (item?.label) {
      this.selectedValue = item?.label;
    }
    this.isDropdownShowed = !this.isDropdownShowed
  }

}
