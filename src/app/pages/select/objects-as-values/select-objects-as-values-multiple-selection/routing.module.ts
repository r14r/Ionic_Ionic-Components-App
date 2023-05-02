import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectObjectsAsValuesMultipleSelectionComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SelectObjectsAsValuesMultipleSelectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectObjectsAsValuesMultipleSelectionComponentRoutingModule {}
