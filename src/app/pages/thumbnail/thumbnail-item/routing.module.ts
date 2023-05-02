import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThumbnailItemComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ThumbnailItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThumbnailItemComponentRoutingModule {}
