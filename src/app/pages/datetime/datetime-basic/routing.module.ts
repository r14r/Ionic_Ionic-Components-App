import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeBasicComponentRoutingModule {}
