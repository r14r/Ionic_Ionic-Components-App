import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalStylingAnimationsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ModalStylingAnimationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalStylingAnimationsComponentRoutingModule {}
