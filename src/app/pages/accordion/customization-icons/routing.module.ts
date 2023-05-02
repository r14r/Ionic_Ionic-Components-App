import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionCustomizationIconsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AccordionCustomizationIconsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionCustomizationIconsComponentRoutingModule {}
