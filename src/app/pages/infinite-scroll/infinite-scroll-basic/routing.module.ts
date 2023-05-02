import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfiniteScrollBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: InfiniteScrollBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfiniteScrollBasicComponentRoutingModule {}
