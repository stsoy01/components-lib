import { Component, Input } from "@angular/core";

@Component({
  selector: 'ts-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent {

  @Input()
  public title: string = '';

  public isDropdownShowed: boolean = false;

  public selectedValue: string = 'Value'

  constructor() { }

  public showDropdownList(): void {
    this.isDropdownShowed = !this.isDropdownShowed
    console.log(this.isDropdownShowed);

  }

}
