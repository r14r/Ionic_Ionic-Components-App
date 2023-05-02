import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimePresentationMonthAndYearComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimePresentationMonthAndYearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimePresentationMonthAndYearComponentRoutingModule {}
