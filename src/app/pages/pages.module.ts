import {NgModule} from "@angular/core";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {CommonModule, NgSwitchCase} from "@angular/common";
import {ComponentsModule} from "../components/components.module";
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "./header/header.component";

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
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
