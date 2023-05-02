import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionDisableGroupComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AccordionDisableGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionDisableGroupComponentRoutingModule {}
