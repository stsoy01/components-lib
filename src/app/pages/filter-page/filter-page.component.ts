import { Component, ViewEncapsulation } from "@angular/core";
import { FilterInterface } from "src/shared/types/filter.interface";

@Component({
  selector: 'filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss'],
})

export class FilterpageComponent {
  public selectedSection: string | number = 'Preview';
  public items: any[] = [
    {name: 'Anna', age: 22, gender: 'female', job: 'frontend'},
    {name: 'Mike', age: 36, gender: 'male', job: 'backend'},
    {name: 'Samuel', age: 14, gender: 'male', job: 'frontend'}, 
    {name: 'Kira', age: 55, gender: 'female', job: 'data science'}, 
    {name: 'Jaden', age: 40, gender: 'female', job: 'python developer'},
    {name: 'Will', age: 43, gender: 'male', job: 'HR'},
    {name: 'Mark', age: 37, gender: 'male', job: 'CEO'},
  ]

  public filterList: FilterInterface[] = [
    {label: 'female',isDisabled: false},
    {label: 'male', isDisabled: false},
    {label: 'frontend',isDisabled: true},
    {label: 'data science',isDisabled: false},
    {label: 'HR',isDisabled: false},
    {label: 'python developer',isDisabled: false},
    {label: 'CEO',isDisabled: false},
  ]

  public selectedSwitchSection(section: string | number): void {
    this.selectedSection = section;
  }
}
