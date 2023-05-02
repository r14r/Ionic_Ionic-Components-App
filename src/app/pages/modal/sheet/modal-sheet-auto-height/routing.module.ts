import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSheetAutoHeightComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ModalSheetAutoHeightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSheetAutoHeightComponentRoutingModule {}
