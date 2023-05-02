import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchbarDebounceComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SearchbarDebounceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchbarDebounceComponentRoutingModule {}
