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
import { TagComponent } from "./tag/tag.component";
import { BlockStatusComponent } from "./block-status/block-status.component";
import {SegmentedComponent} from "./segmented/segmented.component";



@NgModule({
  declarations: [
    SegmentedComponent,
    BlockStatusComponent,
    TagComponent,
    OverviewCompomponent,
    ElasticContainerComponent,
    DialogComponent,
    CheckboxComponent,
    ButtonComponent,
    AccordionComponent,
    CalendarComponent,
    SelectComponent
  ],
  exports: [
    SegmentedComponent,
    SelectComponent,
    BlockStatusComponent,
    TagComponent,
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
