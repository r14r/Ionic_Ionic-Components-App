import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvatarBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AvatarBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvatarBasicComponentRoutingModule {}
