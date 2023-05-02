import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChipThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ChipThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChipThemingCssPropertiesComponentRoutingModule {}
