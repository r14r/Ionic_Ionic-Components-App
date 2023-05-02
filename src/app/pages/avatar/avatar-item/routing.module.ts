import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvatarItemComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AvatarItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvatarItemComponentRoutingModule {}
