import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbsIconsCustomSeparatorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsIconsCustomSeparatorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbsIconsCustomSeparatorsComponentRoutingModule {}
