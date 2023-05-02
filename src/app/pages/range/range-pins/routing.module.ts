import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangePinsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RangePinsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangePinsComponentRoutingModule {}
