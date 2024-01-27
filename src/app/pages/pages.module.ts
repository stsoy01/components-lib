import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CommonModule, NgSwitchCase } from "@angular/common";
import { ComponentsModule } from "../components/components.module";
import { RouterLink } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "../app-routing.module";
import { ButtonpageComponent } from "./button-page/button-page.component";
import { AccordionpageComponent } from "./accordion-page/accordion-page.component";


@NgModule({
  declarations: [
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
