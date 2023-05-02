import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ButtonsBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonsBasicComponentRoutingModule {}
