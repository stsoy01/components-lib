import {Component, ViewEncapsulation} from "@angular/core";
import {FilterInterface} from "src/shared/types/filter.interface";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

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
    {name: 'Billie ', age: 40, gender: 'female', job: 'python developer'},
    {name: 'Bob ', age: 44, gender: 'male', job: 'devops'},
    {name: 'Jordan ', age: 44, gender: 'male', job: 'project manager'},
    {name: 'Kelly ', age: 50, gender: 'female', job: 'python developer'},
    {name: 'Nika', age: 43, gender: 'female', job: 'HR'},
    {name: 'Mark', age: 37, gender: 'male', job: 'CEO'},
  ]

  public filterList: FilterInterface[] = [
    {filter: 'female', isDisabled: false},
    {filter: 'male', isDisabled: false},
    {filter: 'frontend', isDisabled: true},
    {filter: 'data science', isDisabled: false},
    {filter: 'HR', isDisabled: false},
    {filter: 'project manager', isDisabled: false},
    {filter: 'python developer', isDisabled: false},
    {filter: 'devops', isDisabled: false},
    {filter: 'CEO', isDisabled: true},
  ]

  public selectedSwitchSection(section: string | number): void {
    this.selectedSection = section;
  }

  public getSelectedFilters(data: string[]): void {
    const text = document.getElementsByClassName('itemList');

    console.time()
    for (let i = 0; i < this.items.length; i++) {
      if (!data.length) {
        text[i].classList.remove('hide')
      } else if (!Object.values(this.items[i]).includes(data[i])) {
        text[i].classList.add('hide');
      }

      for (let j = 0; j < data.length; j++) {
        if (Object.values(this.items[i]).includes(data[j])) {
          text[i].classList.remove('hide');
        }
      }
    }
    console.timeEnd()
  }
}
