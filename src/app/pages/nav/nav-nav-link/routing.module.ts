import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavNavLinkComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: NavNavLinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavNavLinkComponentRoutingModule {}
