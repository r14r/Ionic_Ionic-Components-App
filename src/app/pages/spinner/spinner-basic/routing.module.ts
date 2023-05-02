import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpinnerBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SpinnerBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpinnerBasicComponentRoutingModule {}
