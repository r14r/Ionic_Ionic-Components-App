import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ButtonThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonThemingCssPropertiesComponentRoutingModule {}
