import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RippleEffectBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RippleEffectBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RippleEffectBasicComponentRoutingModule {}
