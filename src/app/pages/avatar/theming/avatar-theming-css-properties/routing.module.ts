import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvatarThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AvatarThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvatarThemingCssPropertiesComponentRoutingModule {}
