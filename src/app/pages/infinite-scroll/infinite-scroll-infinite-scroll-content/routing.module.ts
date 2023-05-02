import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfiniteScrollInfiniteScrollContentComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: InfiniteScrollInfiniteScrollContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfiniteScrollInfiniteScrollContentComponentRoutingModule {}
