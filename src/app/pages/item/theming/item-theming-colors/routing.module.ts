import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemThemingColorsComponentRoutingModule {}
