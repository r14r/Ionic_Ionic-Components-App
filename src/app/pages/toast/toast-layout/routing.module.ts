import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastLayoutComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToastLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastLayoutComponentRoutingModule {}
