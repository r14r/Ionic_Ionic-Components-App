import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ContentThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentThemingColorsComponentRoutingModule {}
