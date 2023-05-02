import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboxJustifyComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: CheckboxJustifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxJustifyComponentRoutingModule {}
