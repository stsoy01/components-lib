import {NgModule} from "@angular/core";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {CommonModule, NgSwitchCase} from "@angular/common";
import {ComponentsModule} from "../components/components.module";
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {AppRoutingModule} from "../app-routing.module";
import {ButtonpageComponent} from "./button-page/button-page.component";
import {AccordionpageComponent} from "./accordion-page/accordion-page.component";
import {CalendarpageComponent} from "./calendar-page/calendar-page.component";
import {CheckboxpageComponent} from "./checkbox-page/checkbox-page.component";
import {ElasticcontainerpageComponent} from "./elastic-container-page/elastic-container-page.component";
import {DialogpageComponent} from "./dialog-page/dialog-page.component";
import {DropdownpageComponent} from "./dropdown-page/dropdown-page.component";
import {SelectpageComponent} from "./select-page/select-page.component";
import {TagpageComponent} from "./tag-page/tag-page.component";
import {BlockstatuspageComponent} from "./block-status-page/block-status-page.component";
import {SegmentedpageComponent} from "./segmented-page/segmented-page.component";
import {ProgressingpageComponent} from "./progressing-page/progressing-page.component";
import {FieldpageComponent} from "./field-page/field-page.component";
import {InputpageComponent} from "./input-page/input-page.component";
import {FieldsetpageComponent} from "./fieldset-page/fieldset-page.component";
import {FilterpageComponent} from "./filter-page/filter-page.component";
import {NotificationpageComponent} from "./notification-page/notification-page.component";
import {LazyLoadingPage} from "./lazy-loading-page/lazy-loading-page";
import { I18n } from "src/shared/pipes/i18n.pipe";


@NgModule({
  declarations: [
    I18n,
    LazyLoadingPage,
    NotificationpageComponent,
    FilterpageComponent,
    FieldsetpageComponent,
    InputpageComponent,
    FieldpageComponent,
    ProgressingpageComponent,
    SegmentedpageComponent,
    DropdownpageComponent,
    SelectpageComponent,
    BlockstatuspageComponent,
    TagpageComponent,
    DialogpageComponent,
    ElasticcontainerpageComponent,
    CheckboxpageComponent,
    CalendarpageComponent,
    AccordionpageComponent,
    ButtonpageComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgSwitchCase,
    ComponentsModule,
    RouterLink
  ],
  exports: [
    SidebarComponent
  ]
})

export class PagesModule {
}
