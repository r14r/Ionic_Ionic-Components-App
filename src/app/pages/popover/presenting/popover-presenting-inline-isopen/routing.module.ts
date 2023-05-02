import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverPresentingInlineIsopenComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: PopoverPresentingInlineIsopenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverPresentingInlineIsopenComponentRoutingModule {}
