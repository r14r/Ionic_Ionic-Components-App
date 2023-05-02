import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimePresentationTimeComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimePresentationTimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimePresentationTimeComponentRoutingModule {}
