import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeThemingComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeThemingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeThemingComponentRoutingModule {}
