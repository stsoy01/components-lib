import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button/button.component";
import { CommonModule } from "@angular/common";
import { AccordionComponent } from "./accordion/accordion/accordion.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { DialogComponent } from "./dialog/dialog.component";
import { OverviewCompomponent } from "./overview/overview.component";
import { ElasticContainerComponent } from "./elastic-container/elastic-container.component";



@NgModule({
  declarations: [
    OverviewCompomponent,
    ElasticContainerComponent,
    DialogComponent,
    CheckboxComponent,
    ButtonComponent,
    AccordionComponent,
    CalendarComponent,
  ],
  exports: [
    OverviewCompomponent,
    ElasticContainerComponent,
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
