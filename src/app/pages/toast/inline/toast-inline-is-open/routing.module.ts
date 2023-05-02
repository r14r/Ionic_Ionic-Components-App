import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastInlineIsOpenComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToastInlineIsOpenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastInlineIsOpenComponentRoutingModule {}
