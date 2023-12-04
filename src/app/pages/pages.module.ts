import {NgModule} from "@angular/core";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {CommonModule, NgForOf, NgSwitchCase} from "@angular/common";
import {ComponentsModule} from "../components/components.module";

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    NgSwitchCase,
    ComponentsModule
  ],
  exports: [
    SidebarComponent
  ]
})

export class PagesModule {
}
