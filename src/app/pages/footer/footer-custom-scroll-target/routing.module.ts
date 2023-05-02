import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterCustomScrollTargetComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: FooterCustomScrollTargetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterCustomScrollTargetComponentRoutingModule {}
