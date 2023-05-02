import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReorderCustomIconComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ReorderCustomIconComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReorderCustomIconComponentRoutingModule {}
