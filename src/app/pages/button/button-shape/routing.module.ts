import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonShapeComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ButtonShapeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonShapeComponentRoutingModule {}
