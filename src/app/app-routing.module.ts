import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonpageComponent } from './pages/button-page/button-page.component';
import { AccordionComponent } from './components/accordion/accordion/accordion.component';
import { AccordionpageComponent } from './pages/accordion-page/accordion-page.component';
import { CalendarpageComponent } from './pages/calendar-page/calendar-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/buttons', pathMatch: 'full' },
  { path: 'buttons', component: ButtonpageComponent },
  { path: 'accordion', component: AccordionpageComponent },
  { path: 'calendar', component: CalendarpageComponent },
  { path: 'checkbox', component: AccordionComponent },
  { path: 'elasticcontainer', component: AccordionComponent },
  { path: 'dialog', component: AccordionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
