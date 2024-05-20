import {Component} from "@angular/core";

@Component({
  selector: 'select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.scss']
})

export class SelectpageComponent {
  public selectedSection: number | string = 'Preview';
  public selectedValue: string = '';

  public selectedSwitchSection(setcion: string | number): void {
    this.selectedSection = setcion;
  }

  public getSelectedValue(value: any): void {
    console.log(value)
    localStorage.setItem('placeholder', value?.label)
    this.selectedValue = value?.label;
  }

  public getValue(): string {
    return localStorage.getItem('placeholder') ?? 'Choose country'
  }
}
