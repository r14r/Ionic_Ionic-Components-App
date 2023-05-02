import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackdropStylingComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: BackdropStylingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackdropStylingComponentRoutingModule {}
