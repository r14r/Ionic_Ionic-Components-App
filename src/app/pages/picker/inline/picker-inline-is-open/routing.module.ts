import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickerInlineIsOpenComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: PickerInlineIsOpenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickerInlineIsOpenComponentRoutingModule {}
