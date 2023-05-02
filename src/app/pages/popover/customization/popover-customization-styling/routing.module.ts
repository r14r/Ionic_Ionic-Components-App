import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverCustomizationStylingComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: PopoverCustomizationStylingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverCustomizationStylingComponentRoutingModule {}
