import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchbarCancelButtonComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SearchbarCancelButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchbarCancelButtonComponentRoutingModule {}
