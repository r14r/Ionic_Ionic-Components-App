import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ContentThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentThemingCssPropertiesComponentRoutingModule {}
