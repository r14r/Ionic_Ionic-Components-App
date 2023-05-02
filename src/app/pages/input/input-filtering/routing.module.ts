import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputFilteringComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: InputFilteringComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputFilteringComponentRoutingModule {}
