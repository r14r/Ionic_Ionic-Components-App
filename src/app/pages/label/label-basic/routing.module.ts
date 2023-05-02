import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabelBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: LabelBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabelBasicComponentRoutingModule {}
