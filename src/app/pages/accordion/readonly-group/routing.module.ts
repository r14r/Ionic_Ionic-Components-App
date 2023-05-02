import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionReadonlyGroupComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AccordionReadonlyGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionReadonlyGroupComponentRoutingModule {}
