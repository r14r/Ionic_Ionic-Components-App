import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputTypesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: InputTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputTypesComponentRoutingModule {}
