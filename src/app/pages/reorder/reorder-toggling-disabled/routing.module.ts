import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReorderTogglingDisabledComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ReorderTogglingDisabledComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReorderTogglingDisabledComponentRoutingModule {}
