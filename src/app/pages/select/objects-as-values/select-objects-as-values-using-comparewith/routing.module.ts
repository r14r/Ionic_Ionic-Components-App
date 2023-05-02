import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectObjectsAsValuesUsingComparewithComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SelectObjectsAsValuesUsingComparewithComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectObjectsAsValuesUsingComparewithComponentRoutingModule {}
