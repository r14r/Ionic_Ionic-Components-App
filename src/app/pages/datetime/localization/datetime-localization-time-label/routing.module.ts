import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeLocalizationTimeLabelComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeLocalizationTimeLabelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeLocalizationTimeLabelComponentRoutingModule {}
