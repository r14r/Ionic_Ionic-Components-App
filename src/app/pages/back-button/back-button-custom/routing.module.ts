import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackButtonCustomComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: BackButtonCustomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackButtonCustomComponentRoutingModule {}
