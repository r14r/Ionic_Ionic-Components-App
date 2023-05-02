import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectCustomizationButtonTextComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SelectCustomizationButtonTextComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectCustomizationButtonTextComponentRoutingModule {}
