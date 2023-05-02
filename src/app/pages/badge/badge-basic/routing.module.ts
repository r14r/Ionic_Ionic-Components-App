import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: BadgeBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeBasicComponentRoutingModule {}
