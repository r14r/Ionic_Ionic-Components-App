import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionCustomizationThemingComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AccordionCustomizationThemingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionCustomizationThemingComponentRoutingModule {}
