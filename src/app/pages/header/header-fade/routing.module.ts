import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderFadeComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: HeaderFadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderFadeComponentRoutingModule {}
