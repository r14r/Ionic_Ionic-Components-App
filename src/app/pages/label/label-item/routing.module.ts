import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabelItemComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: LabelItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabelItemComponentRoutingModule {}
