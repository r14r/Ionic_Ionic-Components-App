import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThumbnailBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ThumbnailBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThumbnailBasicComponentRoutingModule {}
