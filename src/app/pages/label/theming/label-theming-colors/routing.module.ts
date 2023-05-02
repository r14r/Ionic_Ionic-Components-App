import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabelThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: LabelThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabelThemingColorsComponentRoutingModule {}
