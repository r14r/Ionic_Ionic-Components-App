import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderCustomScrollTargetComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: HeaderCustomScrollTargetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderCustomScrollTargetComponentRoutingModule {}
