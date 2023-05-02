import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabListSideComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: FabListSideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabListSideComponentRoutingModule {}
