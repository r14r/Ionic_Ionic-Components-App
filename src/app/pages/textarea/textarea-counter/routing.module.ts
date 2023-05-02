import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextareaCounterComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: TextareaCounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextareaCounterComponentRoutingModule {}
