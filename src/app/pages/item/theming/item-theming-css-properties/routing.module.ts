import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemThemingCssPropertiesComponentRoutingModule {}
