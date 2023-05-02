import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverCustomizationSizingComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: PopoverCustomizationSizingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverCustomizationSizingComponentRoutingModule {}
