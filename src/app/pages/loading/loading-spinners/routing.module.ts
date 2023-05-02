import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingSpinnersComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: LoadingSpinnersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingSpinnersComponentRoutingModule {}
