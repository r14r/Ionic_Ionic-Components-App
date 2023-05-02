import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextareaHelperErrorComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: TextareaHelperErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextareaHelperErrorComponentRoutingModule {}
