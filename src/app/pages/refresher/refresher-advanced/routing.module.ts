import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefresherAdvancedComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RefresherAdvancedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefresherAdvancedComponentRoutingModule {}
