import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavModalNavigationComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: NavModalNavigationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavModalNavigationComponentRoutingModule {}
