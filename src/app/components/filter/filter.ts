import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  Input,
  AfterContentChecked
} from "@angular/core";
import {FilterInterface} from "src/shared/types/filter.interface";


@Component({
  selector: 'ts-filter',
  templateUrl: './filter.html',
  styleUrls: ['./filter.scss']
})

export class FilterComponent implements OnInit, AfterContentChecked {

  public selectedFilters: string[] = [];
  public theme: any;

  @Input()
  public filters: FilterInterface[] = [];

  @Output()
  public onSelect: EventEmitter<any> = new EventEmitter<string[]>();


  constructor() {

  }

  public ngOnInit(): void {
    this.theme = localStorage.getItem('theme');
  }

  public ngAfterContentChecked(): void {
    this.theme = localStorage.getItem('theme');
  }

  public setFilter(event: any, index: number): void {
    if (event.isDisabled) return;

    if (!this.selectedFilters.includes(event.filter)) {
      this.selectedFilters.push(event.filter)
    } else {
      this.selectedFilters.splice(this.selectedFilters.indexOf(event.filter), 1)
    }

    this.onSelect.emit(this.selectedFilters)
  }


}
