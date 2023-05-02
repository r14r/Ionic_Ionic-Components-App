import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToggleBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToggleBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToggleBasicComponentRoutingModule {}
