import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardButtonsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: CardButtonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardButtonsComponentRoutingModule {}
