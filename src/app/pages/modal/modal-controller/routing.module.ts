import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalControllerComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ModalControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalControllerComponentRoutingModule {}
