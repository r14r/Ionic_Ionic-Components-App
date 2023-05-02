import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimePresentationWheelComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimePresentationWheelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimePresentationWheelComponentRoutingModule {}
