import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackdropBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: BackdropBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackdropBasicComponentRoutingModule {}
