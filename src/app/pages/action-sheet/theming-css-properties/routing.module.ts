import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionSheetThemingCssPropertiesComponentRoutingModule {}
