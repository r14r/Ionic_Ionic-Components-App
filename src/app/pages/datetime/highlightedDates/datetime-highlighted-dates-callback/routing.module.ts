import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeHighlightedDatesCallbackComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeHighlightedDatesCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeHighlightedDatesCallbackComponentRoutingModule {}
