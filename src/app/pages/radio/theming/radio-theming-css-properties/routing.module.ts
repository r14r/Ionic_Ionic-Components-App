import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RadioThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioThemingCssPropertiesComponentRoutingModule {}
