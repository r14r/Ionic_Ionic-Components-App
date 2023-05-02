import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentThemingCssShadowPartsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ContentThemingCssShadowPartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentThemingCssShadowPartsComponentRoutingModule {}
