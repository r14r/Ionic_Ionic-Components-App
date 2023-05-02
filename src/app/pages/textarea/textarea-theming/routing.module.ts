import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextareaThemingComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: TextareaThemingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextareaThemingComponentRoutingModule {}
