import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalStylingThemingComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ModalStylingThemingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalStylingThemingComponentRoutingModule {}
