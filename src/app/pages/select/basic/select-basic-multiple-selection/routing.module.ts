import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectBasicMultipleSelectionComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SelectBasicMultipleSelectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectBasicMultipleSelectionComponentRoutingModule {}
