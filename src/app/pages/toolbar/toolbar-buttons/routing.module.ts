import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolbarButtonsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToolbarButtonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolbarButtonsComponentRoutingModule {}
