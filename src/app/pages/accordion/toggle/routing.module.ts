import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionToggleComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AccordionToggleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionToggleComponentRoutingModule {}
