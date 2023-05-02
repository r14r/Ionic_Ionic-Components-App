import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDividerThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemDividerThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDividerThemingCssPropertiesComponentRoutingModule {}
