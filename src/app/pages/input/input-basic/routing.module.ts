import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: InputBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputBasicComponentRoutingModule {}
