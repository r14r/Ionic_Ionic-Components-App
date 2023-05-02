import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: NoteThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteThemingColorsComponentRoutingModule {}
