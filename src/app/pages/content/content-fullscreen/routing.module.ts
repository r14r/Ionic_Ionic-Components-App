import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentFullscreenComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ContentFullscreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentFullscreenComponentRoutingModule {}
