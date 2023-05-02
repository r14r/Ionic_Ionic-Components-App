import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeButtonsShowingConfirmationButtonsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeButtonsShowingConfirmationButtonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeButtonsShowingConfirmationButtonsComponentRoutingModule {}
