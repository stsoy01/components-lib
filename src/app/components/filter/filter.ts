import { Component, Output, EventEmitter, OnInit, Input } from "@angular/core";
import { FilterInterface } from "src/shared/types/filter.interface";


@Component({
  selector: 'ts-filter',
  templateUrl: './filter.html',
  styleUrls: ['./filter.scss']
})

export class FilterComponent implements OnInit {

  @Input()
  public filters: FilterInterface[] = [];

  @Output()
  public onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }

  public ngOnInit(): void {

  }
}
