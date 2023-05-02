import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextareaBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: TextareaBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextareaBasicComponentRoutingModule {}
