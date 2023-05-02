import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickerControllerComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: PickerControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickerControllerComponentRoutingModule {}
