import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplitPaneBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SplitPaneBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplitPaneBasicComponentRoutingModule {}
