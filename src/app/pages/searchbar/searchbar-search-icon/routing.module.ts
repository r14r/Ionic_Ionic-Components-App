import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchbarSearchIconComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SearchbarSearchIconComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchbarSearchIconComponentRoutingModule {}
