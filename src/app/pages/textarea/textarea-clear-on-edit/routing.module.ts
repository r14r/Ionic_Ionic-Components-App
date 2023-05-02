import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextareaClearOnEditComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: TextareaClearOnEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextareaClearOnEditComponentRoutingModule {}
