import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetRoleInfoOnDismissComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetRoleInfoOnDismissComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionSheetRoleInfoOnDismissComponentRoutingModule {}
