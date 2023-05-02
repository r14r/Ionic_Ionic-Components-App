import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThumbnailThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ThumbnailThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThumbnailThemingCssPropertiesComponentRoutingModule {}
