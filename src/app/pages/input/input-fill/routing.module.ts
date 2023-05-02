import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputFillComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: InputFillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputFillComponentRoutingModule {}
