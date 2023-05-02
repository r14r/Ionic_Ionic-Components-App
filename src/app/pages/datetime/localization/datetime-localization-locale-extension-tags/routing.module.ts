import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeLocalizationLocaleExtensionTagsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: DatetimeLocalizationLocaleExtensionTagsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeLocalizationLocaleExtensionTagsComponentRoutingModule {}
