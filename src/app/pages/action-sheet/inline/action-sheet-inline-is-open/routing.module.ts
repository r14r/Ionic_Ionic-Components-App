import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetInlineIsOpenComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetInlineIsOpenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionSheetInlineIsOpenComponentRoutingModule {}
