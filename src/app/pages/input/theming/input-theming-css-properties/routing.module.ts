import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: InputThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputThemingCssPropertiesComponentRoutingModule {}
