import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectBasicSingleSelectionComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SelectBasicSingleSelectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectBasicSingleSelectionComponentRoutingModule {}
