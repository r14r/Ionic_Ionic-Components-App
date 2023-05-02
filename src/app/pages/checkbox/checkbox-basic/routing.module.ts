import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboxBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: CheckboxBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxBasicComponentRoutingModule {}
