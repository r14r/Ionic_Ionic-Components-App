import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderTranslucentComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: HeaderTranslucentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderTranslucentComponentRoutingModule {}
