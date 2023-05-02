import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuThemingComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: MenuThemingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuThemingComponentRoutingModule {}
