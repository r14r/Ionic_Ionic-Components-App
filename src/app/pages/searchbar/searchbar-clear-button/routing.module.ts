import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchbarClearButtonComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SearchbarClearButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchbarClearButtonComponentRoutingModule {}
