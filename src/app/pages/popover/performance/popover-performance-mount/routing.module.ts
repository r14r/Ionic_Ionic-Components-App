import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverPerformanceMountComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: PopoverPerformanceMountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverPerformanceMountComponentRoutingModule {}
