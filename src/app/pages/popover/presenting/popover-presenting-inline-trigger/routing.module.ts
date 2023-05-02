import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverPresentingInlineTriggerComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: PopoverPresentingInlineTriggerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverPresentingInlineTriggerComponentRoutingModule {}
