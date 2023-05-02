import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastButtonsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToastButtonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastButtonsComponentRoutingModule {}
