import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionDisableIndividualComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AccordionDisableIndividualComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionDisableIndividualComponentRoutingModule {}
