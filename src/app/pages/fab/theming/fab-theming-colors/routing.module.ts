import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: FabThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabThemingColorsComponentRoutingModule {}
