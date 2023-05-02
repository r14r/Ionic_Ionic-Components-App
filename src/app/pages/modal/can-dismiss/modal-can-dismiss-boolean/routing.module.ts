import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCanDismissBooleanComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ModalCanDismissBooleanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCanDismissBooleanComponentRoutingModule {}
