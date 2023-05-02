import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetInlineTriggerComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetInlineTriggerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionSheetInlineTriggerComponentRoutingModule {}
