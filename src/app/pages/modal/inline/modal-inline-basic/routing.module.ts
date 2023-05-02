import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalInlineBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ModalInlineBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalInlineBasicComponentRoutingModule {}
