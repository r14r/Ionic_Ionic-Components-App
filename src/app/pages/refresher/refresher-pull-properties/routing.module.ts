import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefresherPullPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RefresherPullPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefresherPullPropertiesComponentRoutingModule {}
