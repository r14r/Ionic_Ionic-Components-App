import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridCustomizingPaddingComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: GridCustomizingPaddingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridCustomizingPaddingComponentRoutingModule {}
