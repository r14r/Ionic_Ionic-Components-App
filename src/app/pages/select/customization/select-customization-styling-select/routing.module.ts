import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectCustomizationStylingSelectComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SelectCustomizationStylingSelectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectCustomizationStylingSelectComponentRoutingModule {}
