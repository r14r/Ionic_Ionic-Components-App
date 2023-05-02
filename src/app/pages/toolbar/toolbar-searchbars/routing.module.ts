import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolbarSearchbarsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToolbarSearchbarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolbarSearchbarsComponentRoutingModule {}
