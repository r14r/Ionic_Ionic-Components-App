import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSheetHandleBehaviorComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ModalSheetHandleBehaviorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSheetHandleBehaviorComponentRoutingModule {}
