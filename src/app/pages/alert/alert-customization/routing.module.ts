import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertCustomizationComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AlertCustomizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertCustomizationComponentRoutingModule {}
