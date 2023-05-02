import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionMultipleComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AccordionMultipleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionMultipleComponentRoutingModule {}
