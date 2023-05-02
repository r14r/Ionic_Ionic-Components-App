import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSheetBackgroundContentComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ModalSheetBackgroundContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSheetBackgroundContentComponentRoutingModule {}
