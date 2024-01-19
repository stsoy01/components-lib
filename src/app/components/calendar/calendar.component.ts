import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'ts-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {

  public currentMonth = new Date().getMonth();
  public currentYear = new Date().getFullYear();
  public intermediateYear!: number;
  public selectedDay: number | undefined;
  public mothDaysArr: any[] = [];
  public months: any = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь',
  }
  public monthsDays: any = {
    0: 31,
    1: 29,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31,
  }

  public ngOnInit(): void {
    this.intermediateYear = this.currentYear;
    this.formMonthDays();
  }

  private formMonthDays(): void {
    this.mothDaysArr = Array.from({length: this.monthsDays[this.currentMonth]}).map((_, index) => ({day: index + 1, status: 'current'}));
    let i = 1
    while (this.mothDaysArr.length !== 42) {
      this.mothDaysArr.push({day: i++, status: 'next'})
    }
    console.log(this.mothDaysArr)
  }

  public setPrevMonth(): void {
    this.selectedDay = undefined;
    if (this.currentMonth === 0) {
      this.intermediateYear--;
      this.currentMonth = 12;

    }
    this.currentMonth--;
    this.formMonthDays();

  }

  public setNextMonth(): void {
    this.selectedDay = undefined;
    if (this.currentMonth !== 11) {
      this.currentMonth++;
    } else {
      this.intermediateYear++;
      this.currentMonth = 0;
    }
    this.formMonthDays();
  }

  public getDay(day: any, index: number): void {
    console.log('day', day)
    this.selectedDay = index ?? undefined;
    console.log('index', index)
  }


}
