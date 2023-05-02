import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentHeaderFooterComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ContentHeaderFooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentHeaderFooterComponentRoutingModule {}
