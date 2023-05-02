import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSheetBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ModalSheetBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSheetBasicComponentRoutingModule {}
