import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToggleListComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToggleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToggleListComponentRoutingModule {}
