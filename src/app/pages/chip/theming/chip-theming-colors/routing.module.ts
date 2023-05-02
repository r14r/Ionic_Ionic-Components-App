import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChipThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ChipThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChipThemingColorsComponentRoutingModule {}
