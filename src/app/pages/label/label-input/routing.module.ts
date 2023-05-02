import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabelInputComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: LabelInputComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabelInputComponentRoutingModule {}
