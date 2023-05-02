import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: CardThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardThemingCssPropertiesComponentRoutingModule {}
