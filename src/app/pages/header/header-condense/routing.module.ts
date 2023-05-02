import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderCondenseComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: HeaderCondenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderCondenseComponentRoutingModule {}
