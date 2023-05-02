import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionCustomizationAdvancedExpansionStylesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AccordionCustomizationAdvancedExpansionStylesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionCustomizationAdvancedExpansionStylesComponentRoutingModule {}
