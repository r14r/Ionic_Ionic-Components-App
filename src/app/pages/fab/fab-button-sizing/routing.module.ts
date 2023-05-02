import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabButtonSizingComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: FabButtonSizingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabButtonSizingComponentRoutingModule {}
