import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToggleThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToggleThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToggleThemingCssPropertiesComponentRoutingModule {}
