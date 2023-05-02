import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: CardBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardBasicComponentRoutingModule {}
