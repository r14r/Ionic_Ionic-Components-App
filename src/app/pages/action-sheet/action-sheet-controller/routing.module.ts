import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetControllerComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionSheetControllerComponentRoutingModule {}
