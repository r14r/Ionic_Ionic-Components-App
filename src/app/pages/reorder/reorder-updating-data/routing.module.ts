import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReorderUpdatingDataComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ReorderUpdatingDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReorderUpdatingDataComponentRoutingModule {}
