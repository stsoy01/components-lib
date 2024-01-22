import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
  selector: 'ts-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {

  @Output()
  public onSelect: EventEmitter<any> = new EventEmitter<any>()

  public currentMonth = new Date().getMonth();
  public currentYear = new Date().getFullYear();
  public selectedYear = new Date(this.currentYear, 2, 0).getDate();
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
    1: this.selectedYear,
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
    this.mothDaysArr.length = 0;
    let dayMonthIndex = new Date(`${this.intermediateYear}.${this.currentMonth + 1}.1`).getDay()
    let prevDays = this.monthsDays[this.currentMonth - 1] ?? this.monthsDays[0];

    // Добавление дней ПРЕДШЕСТВУЮЩЕГО месяца текущему
    while (dayMonthIndex !== 1) {
      if (dayMonthIndex === 0) {
        dayMonthIndex = 7;
        dayMonthIndex--;
      } else {
        dayMonthIndex--;
      }
      this.mothDaysArr.push({day: ((prevDays - (dayMonthIndex - 1))), status: 'prev'})
    }

    // Добавление дней ТЕКУЩЕГО месяца
    let mainDays = 1
    while (mainDays < this.monthsDays[this.currentMonth] + 1) {
      this.mothDaysArr.push({
        day: mainDays++,
        status: 'current',
        type: new Date(`${this.intermediateYear}.${this.currentMonth + 1}.${mainDays}`).getDay()
      })
    }

    // Добавление дней СЛЕДУЮЩЕГО месяца за текущим
    let nextDays = 1
    while (this.mothDaysArr.length !== 42) {
      this.mothDaysArr.push({
        day: nextDays++,
        status: 'next',
        type: new Date(`${this.intermediateYear}.${this.currentMonth + 2}.${nextDays - 1}`).getDay()
      })
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
    this.monthsDays['1'] = new Date(this.intermediateYear, 2, 0).getDate();
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
    this.monthsDays['1'] = new Date(this.intermediateYear, 2, 0).getDate();
    this.formMonthDays();

  }

  public getDay(day: any, index: number): void {
    switch (day.status) {
      case 'prev':
        this.setPrevMonth();
        break;
      case 'next':
        this.setNextMonth();
        break;

    }
    this.selectedDay = index ?? undefined;
    if (day.status === 'current') {
      this.onSelect.emit(`${this.intermediateYear}.${this.currentMonth + 1}.${day.day}`)
    }
  }
}
