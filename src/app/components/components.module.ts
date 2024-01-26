import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button/button.component";
import { CommonModule } from "@angular/common";
import { AccordionComponent } from "./accordion/accordion/accordion.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import {DialogComponent} from "./dialog/dialog.component";



@NgModule({
  declarations: [
    DialogComponent,
    CheckboxComponent,
    ButtonComponent,
    AccordionComponent,
    CalendarComponent,
  ],
  exports: [
    DialogComponent,
    ButtonComponent,
    CheckboxComponent,
    AccordionComponent,
    CalendarComponent
  ],
  imports: [CommonModule]
})

export class ComponentsModule {
}
