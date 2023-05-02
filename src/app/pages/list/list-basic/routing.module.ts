import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ListBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBasicComponentRoutingModule {}
