import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuTypeComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: MenuTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTypeComponentRoutingModule {}
