import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ButtonBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonBasicComponentRoutingModule {}
