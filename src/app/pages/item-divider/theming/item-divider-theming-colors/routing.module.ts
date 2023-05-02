import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDividerThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemDividerThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDividerThemingColorsComponentRoutingModule {}
