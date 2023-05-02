import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeButtonsCustomizingButtonTextsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeButtonsCustomizingButtonTextsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeButtonsCustomizingButtonTextsComponentRoutingModule {}
