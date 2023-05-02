import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeButtonsCustomizingButtonsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeButtonsCustomizingButtonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeButtonsCustomizingButtonsComponentRoutingModule {}
