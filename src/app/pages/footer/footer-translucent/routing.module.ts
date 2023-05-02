import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterTranslucentComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: FooterTranslucentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterTranslucentComponentRoutingModule {}
