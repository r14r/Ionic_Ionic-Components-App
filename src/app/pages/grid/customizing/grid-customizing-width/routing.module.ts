import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridCustomizingWidthComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: GridCustomizingWidthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridCustomizingWidthComponentRoutingModule {}
