import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: FooterBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterBasicComponentRoutingModule {}
