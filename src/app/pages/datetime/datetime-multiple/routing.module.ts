import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeMultipleComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeMultipleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeMultipleComponentRoutingModule {}
