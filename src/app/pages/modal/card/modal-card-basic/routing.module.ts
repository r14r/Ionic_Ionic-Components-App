import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCardBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ModalCardBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCardBasicComponentRoutingModule {}
