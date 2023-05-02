import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReorderWrapperComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ReorderWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReorderWrapperComponentRoutingModule {}
