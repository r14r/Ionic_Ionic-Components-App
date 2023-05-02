import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionReadonlyIndividualComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AccordionReadonlyIndividualComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionReadonlyIndividualComponentRoutingModule {}
