import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentScrollMethodsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ContentScrollMethodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentScrollMethodsComponentRoutingModule {}
