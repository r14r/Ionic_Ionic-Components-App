import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputCounterComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: InputCounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputCounterComponentRoutingModule {}
