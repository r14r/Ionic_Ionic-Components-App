import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToggleOnOffComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToggleOnOffComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToggleOnOffComponentRoutingModule {}
