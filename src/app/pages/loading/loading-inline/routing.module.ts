import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingInlineComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: LoadingInlineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingInlineComponentRoutingModule {}
