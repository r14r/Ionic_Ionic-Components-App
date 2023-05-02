import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: CardThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardThemingColorsComponentRoutingModule {}
