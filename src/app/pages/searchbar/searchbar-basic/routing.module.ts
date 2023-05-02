import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchbarBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SearchbarBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchbarBasicComponentRoutingModule {}
