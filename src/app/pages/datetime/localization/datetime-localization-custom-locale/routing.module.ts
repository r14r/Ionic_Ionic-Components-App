import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeLocalizationCustomLocaleComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeLocalizationCustomLocaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeLocalizationCustomLocaleComponentRoutingModule {}
