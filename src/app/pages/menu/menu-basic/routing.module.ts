import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: MenuBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuBasicComponentRoutingModule {}
