import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterFadeComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: FooterFadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterFadeComponentRoutingModule {}
