import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressBarIndeterminateComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ProgressBarIndeterminateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressBarIndeterminateComponentRoutingModule {}
