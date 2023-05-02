import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteItemComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: NoteItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteItemComponentRoutingModule {}
