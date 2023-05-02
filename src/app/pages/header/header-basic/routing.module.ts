import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: HeaderBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderBasicComponentRoutingModule {}
