import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchbarThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SearchbarThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchbarThemingCssPropertiesComponentRoutingModule {}
