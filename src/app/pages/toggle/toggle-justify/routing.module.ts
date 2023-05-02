import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToggleJustifyComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToggleJustifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToggleJustifyComponentRoutingModule {}
