import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickerInlineTriggerComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: PickerInlineTriggerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickerInlineTriggerComponentRoutingModule {}
