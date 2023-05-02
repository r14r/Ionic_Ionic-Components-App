import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IconBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: IconBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconBasicComponentRoutingModule {}
