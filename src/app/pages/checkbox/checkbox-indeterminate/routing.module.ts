import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboxIndeterminateComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: CheckboxIndeterminateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxIndeterminateComponentRoutingModule {}
