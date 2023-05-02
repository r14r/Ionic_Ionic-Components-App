import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ImgBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgBasicComponentRoutingModule {}
