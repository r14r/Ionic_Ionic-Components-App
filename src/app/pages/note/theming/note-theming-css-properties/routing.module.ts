import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: NoteThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteThemingCssPropertiesComponentRoutingModule {}
