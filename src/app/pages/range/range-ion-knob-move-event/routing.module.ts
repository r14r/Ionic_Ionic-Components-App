import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangeIonKnobMoveEventComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RangeIonKnobMoveEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangeIonKnobMoveEventComponentRoutingModule {}
