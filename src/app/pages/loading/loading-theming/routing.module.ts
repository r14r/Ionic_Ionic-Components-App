import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingThemingComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: LoadingThemingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingThemingComponentRoutingModule {}
