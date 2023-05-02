import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefresherCustomContentComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RefresherCustomContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefresherCustomContentComponentRoutingModule {}
