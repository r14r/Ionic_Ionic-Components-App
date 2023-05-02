import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastIconComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToastIconComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastIconComponentRoutingModule {}
