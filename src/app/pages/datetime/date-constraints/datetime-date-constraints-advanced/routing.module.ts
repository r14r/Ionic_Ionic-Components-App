import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeDateConstraintsAdvancedComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeDateConstraintsAdvancedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeDateConstraintsAdvancedComponentRoutingModule {}
