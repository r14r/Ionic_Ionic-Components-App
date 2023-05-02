import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangeIonChangeEventComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RangeIonChangeEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangeIonChangeEventComponentRoutingModule {}
