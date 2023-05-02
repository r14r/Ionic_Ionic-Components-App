import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputClearComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: InputClearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputClearComponentRoutingModule {}
