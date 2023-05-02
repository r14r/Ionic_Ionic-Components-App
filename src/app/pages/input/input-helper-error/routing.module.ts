import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputHelperErrorComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: InputHelperErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputHelperErrorComponentRoutingModule {}
