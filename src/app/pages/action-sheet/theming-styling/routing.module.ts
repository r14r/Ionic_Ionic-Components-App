import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetThemingStylingComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetThemingStylingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionSheetThemingStylingComponentRoutingModule {}
