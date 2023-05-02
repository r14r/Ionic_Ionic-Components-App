import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleCollapsibleLargeTitleButtonsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: TitleCollapsibleLargeTitleButtonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitleCollapsibleLargeTitleButtonsComponentRoutingModule {}
