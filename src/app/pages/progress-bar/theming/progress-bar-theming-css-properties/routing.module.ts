import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressBarThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ProgressBarThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressBarThemingCssPropertiesComponentRoutingModule {}
