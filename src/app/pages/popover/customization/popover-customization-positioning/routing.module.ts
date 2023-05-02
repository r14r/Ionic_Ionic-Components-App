import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverCustomizationPositioningComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: PopoverCustomizationPositioningComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverCustomizationPositioningComponentRoutingModule {}
