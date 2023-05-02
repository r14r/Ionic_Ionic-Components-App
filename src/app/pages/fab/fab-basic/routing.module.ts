import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: FabBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabBasicComponentRoutingModule {}
