
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonpageComponent } from './pages/button-page/button-page.component';
import { AccordionpageComponent } from './pages/accordion-page/accordion-page.component';
import { CalendarpageComponent } from './pages/calendar-page/calendar-page.component';
import { CheckboxpageComponent } from './pages/checkbox-page/checkbox-page.component';
import { ElasticcontainerpageComponent } from './pages/elastic-container-page/elastic-container-page.component';
import { DialogpageComponent } from './pages/dialog-page/dialog-page.component';
import { TagpageComponent } from "./pages/tag-page/tag-page.component";
import { BlockstatuspageComponent } from "./pages/block-status-page/block-status-page.component";
import { SelectpageComponent } from './pages/select-page/select-page.component';
import { DropdownpageComponent } from './pages/dropdown-page/dropdown-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/buttons', pathMatch: 'full' },
  { path: 'buttons', component: ButtonpageComponent },
  { path: 'accordion', component: AccordionpageComponent },
  { path: 'calendar', component: CalendarpageComponent },
  { path: 'checkbox', component: CheckboxpageComponent },
  { path: 'elasticcontainer', component: ElasticcontainerpageComponent },
  { path: 'dialog', component: DialogpageComponent },
  { path: 'dropdown', component: DropdownpageComponent },
  { path: 'select', component: SelectpageComponent },
  { path: 'blockstatus', component: BlockstatuspageComponent },
  { path: 'tag', component: TagpageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
