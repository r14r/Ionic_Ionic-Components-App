import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToggleThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToggleThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToggleThemingColorsComponentRoutingModule {}
