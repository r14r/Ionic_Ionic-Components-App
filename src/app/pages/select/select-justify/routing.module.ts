import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectJustifyComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SelectJustifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectJustifyComponentRoutingModule {}
