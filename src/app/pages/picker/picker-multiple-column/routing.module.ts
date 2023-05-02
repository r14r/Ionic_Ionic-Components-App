import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickerMultipleColumnComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: PickerMultipleColumnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickerMultipleColumnComponentRoutingModule {}
