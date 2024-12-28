import {NgModule} from "@angular/core";
import {ButtonComponent} from "./button/button/button.component";
import {CommonModule} from "@angular/common";
import {CalendarComponent} from "./calendar/calendar.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {DialogComponent} from "./dialog/dialog.component";
import {OverviewCompomponent} from "./overview/overview.component";
import {ElasticContainerComponent} from "./elastic-container/elastic-container.component";
import {AccordionComponent} from "./accordion/accordion/accordion.component";
import {SelectComponent} from "./select/select.component";
import {TagComponent} from "./tag/tag.component";
import {BlockStatusComponent} from "./block-status/block-status.component";
import {SegmentedComponent} from "./segmented/segmented.component";
import {ProgressingComponent} from "./progressing/progressing.component";
import {FieldComponent} from "./field/field.component";
import {LoaderComponent} from "./loader/loader.component";
import {InputComponent} from "./input/input.component";
import {IconComponent} from "./icon/icon.component";
import {IconDirective} from "./icon/icon.directive";
import {FieldsetComponent} from "./fieldset/fieldset.component";
import {FilterComponent} from "./filter/filter";
import {LazyLoading} from "./lazy-loading/lazy-loading";


@NgModule({
  declarations: [
    LazyLoading,
    FilterComponent,
    FieldsetComponent,
    IconDirective,
    IconComponent,
    InputComponent,
    LoaderComponent,
    FieldComponent,
    ProgressingComponent,
    SegmentedComponent,
    BlockStatusComponent,
    TagComponent,
    OverviewCompomponent,
    ElasticContainerComponent,
    DialogComponent,
    ButtonComponent,
    AccordionComponent,
    CalendarComponent,
    SelectComponent
  ],
  exports: [
    LazyLoading,
    FilterComponent,
    FieldsetComponent,
    IconDirective,
    IconComponent,
    InputComponent,
    LoaderComponent,
    FieldComponent,
    ProgressingComponent,
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
  imports: [CommonModule, CheckboxComponent]
})

export class ComponentsModule {
}
