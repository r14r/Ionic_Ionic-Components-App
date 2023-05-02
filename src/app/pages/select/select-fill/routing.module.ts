import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectFillComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SelectFillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectFillComponentRoutingModule {}
