import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RadioThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioThemingColorsComponentRoutingModule {}
