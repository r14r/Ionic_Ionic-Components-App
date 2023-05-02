import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboxThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: CheckboxThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxThemingCssPropertiesComponentRoutingModule {}
