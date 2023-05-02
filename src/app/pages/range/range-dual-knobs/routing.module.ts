import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangeDualKnobsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RangeDualKnobsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangeDualKnobsComponentRoutingModule {}
