import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeLocalizationFirstDayOfWeekComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeLocalizationFirstDayOfWeekComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeLocalizationFirstDayOfWeekComponentRoutingModule {}
