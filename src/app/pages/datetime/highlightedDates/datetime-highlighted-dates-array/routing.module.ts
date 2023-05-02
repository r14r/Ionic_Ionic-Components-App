import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeHighlightedDatesArrayComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeHighlightedDatesArrayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeHighlightedDatesArrayComponentRoutingModule {}
