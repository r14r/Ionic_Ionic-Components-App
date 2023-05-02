import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterNoBorderComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: FooterNoBorderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterNoBorderComponentRoutingModule {}
