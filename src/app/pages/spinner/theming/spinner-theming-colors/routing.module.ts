import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpinnerThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SpinnerThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpinnerThemingColorsComponentRoutingModule {}
