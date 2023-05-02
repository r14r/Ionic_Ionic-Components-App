import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: TitleThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitleThemingCssPropertiesComponentRoutingModule {}
