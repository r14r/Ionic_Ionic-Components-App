import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: InputThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputThemingColorsComponentRoutingModule {}
