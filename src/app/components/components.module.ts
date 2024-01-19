import {NgModule} from "@angular/core";
import {ButtonComponent} from "./button/button/button.component";
import {CommonModule} from "@angular/common";
import {AccordionComponent} from "./accordion/accordion/accordion.component";
import {CalendarComponent} from "./calendar/calendar.component";

@NgModule({
  declarations: [
    ButtonComponent,
    AccordionComponent,
    CalendarComponent
  ],
  exports: [
    ButtonComponent,
    AccordionComponent,
    CalendarComponent
  ],
  imports: [CommonModule]
})

export class ComponentsModule {
}
