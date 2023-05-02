import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonFillComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ButtonFillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonFillComponentRoutingModule {}
