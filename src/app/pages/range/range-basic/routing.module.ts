import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangeBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RangeBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangeBasicComponentRoutingModule {}
