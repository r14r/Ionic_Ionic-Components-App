import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolbarThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToolbarThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolbarThemingCssPropertiesComponentRoutingModule {}
