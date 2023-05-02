import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeDateConstraintsMaxMinComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeDateConstraintsMaxMinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeDateConstraintsMaxMinComponentRoutingModule {}
