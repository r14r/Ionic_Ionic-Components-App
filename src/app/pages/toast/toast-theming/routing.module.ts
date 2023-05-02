import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastThemingComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToastThemingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastThemingComponentRoutingModule {}
