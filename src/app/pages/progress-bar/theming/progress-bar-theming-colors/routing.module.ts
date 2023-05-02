import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressBarThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ProgressBarThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressBarThemingColorsComponentRoutingModule {}
