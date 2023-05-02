import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeButtonBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeButtonBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeButtonBasicComponentRoutingModule {}
