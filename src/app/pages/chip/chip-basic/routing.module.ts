import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChipBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ChipBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChipBasicComponentRoutingModule {}
