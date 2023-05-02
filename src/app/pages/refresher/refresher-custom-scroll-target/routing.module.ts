import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefresherCustomScrollTargetComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RefresherCustomScrollTargetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefresherCustomScrollTargetComponentRoutingModule {}
