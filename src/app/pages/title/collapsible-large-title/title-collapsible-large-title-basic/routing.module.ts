import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleCollapsibleLargeTitleBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: TitleCollapsibleLargeTitleBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitleCollapsibleLargeTitleBasicComponentRoutingModule {}
