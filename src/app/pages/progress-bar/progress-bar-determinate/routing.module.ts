import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressBarDeterminateComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ProgressBarDeterminateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressBarDeterminateComponentRoutingModule {}
