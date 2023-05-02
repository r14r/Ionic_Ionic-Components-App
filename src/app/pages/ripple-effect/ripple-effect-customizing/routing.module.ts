import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RippleEffectCustomizingComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RippleEffectCustomizingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RippleEffectCustomizingComponentRoutingModule {}
