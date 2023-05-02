import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AccordionBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionBasicComponentRoutingModule {}
