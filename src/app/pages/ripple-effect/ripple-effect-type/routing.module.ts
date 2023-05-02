import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RippleEffectTypeComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RippleEffectTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RippleEffectTypeComponentRoutingModule {}
