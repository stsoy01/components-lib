import {NgModule} from "@angular/core";
import {ButtonComponent} from "./button/button/button.component";
import {CommonModule} from "@angular/common";
import {AccordionComponent} from "./accordion/accordion/accordion.component";

@NgModule({
  declarations: [
    ButtonComponent,
    AccordionComponent
  ],
  exports: [
    ButtonComponent,
    AccordionComponent
  ],
  imports: [CommonModule]
})

export class ComponentsModule {
}
