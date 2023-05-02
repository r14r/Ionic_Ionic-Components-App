import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentFixedComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ContentFixedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentFixedComponentRoutingModule {}
