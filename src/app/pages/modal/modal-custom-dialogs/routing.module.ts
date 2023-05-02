import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCustomDialogsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ModalCustomDialogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCustomDialogsComponentRoutingModule {}
