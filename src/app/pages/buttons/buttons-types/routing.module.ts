import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsTypesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ButtonsTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonsTypesComponentRoutingModule {}
