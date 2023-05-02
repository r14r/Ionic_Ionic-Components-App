import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingControllerComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: LoadingControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingControllerComponentRoutingModule {}
