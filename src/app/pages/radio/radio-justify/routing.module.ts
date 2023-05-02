import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioJustifyComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RadioJustifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioJustifyComponentRoutingModule {}
