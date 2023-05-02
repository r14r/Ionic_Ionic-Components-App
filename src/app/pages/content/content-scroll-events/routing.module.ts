import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentScrollEventsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ContentScrollEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentScrollEventsComponentRoutingModule {}
