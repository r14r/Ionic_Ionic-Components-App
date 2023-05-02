import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCanDismissFunctionComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ModalCanDismissFunctionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCanDismissFunctionComponentRoutingModule {}
