import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolbarProgressBarsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToolbarProgressBarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolbarProgressBarsComponentRoutingModule {}
