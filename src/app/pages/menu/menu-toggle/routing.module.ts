import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuToggleComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: MenuToggleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuToggleComponentRoutingModule {}
