import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionCustomizationExpansionStylesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AccordionCustomizationExpansionStylesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionCustomizationExpansionStylesComponentRoutingModule {}
