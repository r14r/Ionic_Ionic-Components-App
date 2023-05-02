import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: TitleBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitleBasicComponentRoutingModule {}
