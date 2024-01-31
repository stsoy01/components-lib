import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CommonModule, NgSwitchCase } from "@angular/common";
import { ComponentsModule } from "../components/components.module";
import { RouterLink } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "../app-routing.module";
import { ButtonpageComponent } from "./button-page/button-page.component";
import { AccordionpageComponent } from "./accordion-page/accordion-page.component";
import { CalendarpageComponent } from "./calendar-page/calendar-page.component";
import { CheckboxpageComponent } from "./checkbox-page/checkbox-page.component";
import { ElasticcontainerpageComponent } from "./elastic-container-page/elastic-container-page.component";
import { DialogpageComponent } from "./dialog-page/dialog-page.component";
import {TagpageComponent} from "./tag-page/tag-page.component";
import {BlockstatuspageComponent} from "./block-status-page/block-status-page.component";

@NgModule({
  declarations: [
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
    AppRoutingModule,
    CommonModule,
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
