import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolbarThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToolbarThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolbarThemingColorsComponentRoutingModule {}
