import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeTitleCustomizingTitleComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeTitleCustomizingTitleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeTitleCustomizingTitleComponentRoutingModule {}
