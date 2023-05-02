import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridCustomizingColumnNumberComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: GridCustomizingColumnNumberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridCustomizingColumnNumberComponentRoutingModule {}
