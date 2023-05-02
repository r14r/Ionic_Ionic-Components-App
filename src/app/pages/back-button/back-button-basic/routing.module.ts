import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackButtonBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: BackButtonBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackButtonBasicComponentRoutingModule {}
