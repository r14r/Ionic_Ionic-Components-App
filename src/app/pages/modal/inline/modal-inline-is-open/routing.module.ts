import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalInlineIsOpenComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ModalInlineIsOpenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalInlineIsOpenComponentRoutingModule {}
