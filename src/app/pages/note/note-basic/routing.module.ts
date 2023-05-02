import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: NoteBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteBasicComponentRoutingModule {}
