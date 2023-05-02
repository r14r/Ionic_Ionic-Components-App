import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefresherBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RefresherBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefresherBasicComponentRoutingModule {}
