import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouterBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RouterBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouterBasicComponentRoutingModule {}
