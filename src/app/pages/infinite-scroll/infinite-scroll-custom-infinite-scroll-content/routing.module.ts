import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfiniteScrollCustomInfiniteScrollContentComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: InfiniteScrollCustomInfiniteScrollContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfiniteScrollCustomInfiniteScrollContentComponentRoutingModule {}
