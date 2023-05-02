import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsRouterComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: TabsRouterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRouterComponentRoutingModule {}
