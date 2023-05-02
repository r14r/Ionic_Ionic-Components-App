import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardMediaComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: CardMediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardMediaComponentRoutingModule {}
