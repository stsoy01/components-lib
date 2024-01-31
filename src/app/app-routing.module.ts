import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonpageComponent } from './pages/button-page/button-page.component';
import { AccordionComponent } from './components/accordion/accordion/accordion.component';
import { AccordionpageComponent } from './pages/accordion-page/accordion-page.component';
import { CalendarpageComponent } from './pages/calendar-page/calendar-page.component';
import { CheckboxpageComponent } from './pages/checkbox-page/checkbox-page.component';
import { ElasticcontainerpageComponent } from './pages/elastic-container-page/elastic-container-page.component';
import { DialogpageComponent } from './pages/dialog-page/dialog-page.component';
import { DropdownpageComponent } from './pages/dropdown-page/dropdown-page.component';
import { SelectpageComponent } from './pages/select-page/select-page.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
