import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchbarThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SearchbarThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchbarThemingColorsComponentRoutingModule {}
