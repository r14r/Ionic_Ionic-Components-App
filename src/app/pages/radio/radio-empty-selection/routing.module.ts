import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioEmptySelectionComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RadioEmptySelectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioEmptySelectionComponentRoutingModule {}
