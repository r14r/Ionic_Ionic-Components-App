import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplitPaneThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SplitPaneThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplitPaneThemingCssPropertiesComponentRoutingModule {}
