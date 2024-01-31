import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button/button.component";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./calendar/calendar.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { DialogComponent } from "./dialog/dialog.component";
import { OverviewCompomponent } from "./overview/overview.component";
import { ElasticContainerComponent } from "./elastic-container/elastic-container.component";
import { AccordionComponent } from "./accordion/accordion/accordion.component";
import { SelectComponent } from "./select/select.component";

@NgModule({
  declarations: [
    SelectComponent,
    OverviewCompomponent,
    ElasticContainerComponent,
    DialogComponent,
    CheckboxComponent,
    ButtonComponent,
    AccordionComponent,
    CalendarComponent,
  ],
  exports: [
    SelectComponent,
    AccordionComponent,
    OverviewCompomponent,
    ElasticContainerComponent,
    DialogComponent,
    ButtonComponent,
    CheckboxComponent,
    CalendarComponent
  ],
  imports: [CommonModule]
})

export class ComponentsModule {
}
