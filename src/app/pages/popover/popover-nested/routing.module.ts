import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverNestedComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: PopoverNestedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverNestedComponentRoutingModule {}
