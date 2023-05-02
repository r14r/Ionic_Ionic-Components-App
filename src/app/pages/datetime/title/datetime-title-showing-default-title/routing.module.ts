import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeTitleShowingDefaultTitleComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeTitleShowingDefaultTitleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeTitleShowingDefaultTitleComponentRoutingModule {}
