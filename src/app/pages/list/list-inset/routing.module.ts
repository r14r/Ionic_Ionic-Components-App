import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListInsetComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ListInsetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListInsetComponentRoutingModule {}
