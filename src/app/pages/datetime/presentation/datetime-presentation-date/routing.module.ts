import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimePresentationDateComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimePresentationDateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimePresentationDateComponentRoutingModule {}
