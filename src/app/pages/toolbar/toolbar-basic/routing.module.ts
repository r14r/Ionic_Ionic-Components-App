import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolbarBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToolbarBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolbarBasicComponentRoutingModule {}
