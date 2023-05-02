import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderNoBorderComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: HeaderNoBorderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderNoBorderComponentRoutingModule {}
