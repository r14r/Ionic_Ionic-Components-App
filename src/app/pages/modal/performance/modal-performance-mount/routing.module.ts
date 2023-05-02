import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPerformanceMountComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ModalPerformanceMountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPerformanceMountComponentRoutingModule {}
