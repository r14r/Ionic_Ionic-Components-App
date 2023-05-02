import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonSizeComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ButtonSizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonSizeComponentRoutingModule {}
