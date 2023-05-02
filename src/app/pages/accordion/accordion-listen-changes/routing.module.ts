import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionListenChangesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AccordionListenChangesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionListenChangesComponentRoutingModule {}
