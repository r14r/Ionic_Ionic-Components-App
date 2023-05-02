import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonIconsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ButtonIconsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonIconsComponentRoutingModule {}
