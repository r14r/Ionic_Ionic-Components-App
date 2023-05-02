import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressBarBufferComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ProgressBarBufferComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressBarBufferComponentRoutingModule {}
