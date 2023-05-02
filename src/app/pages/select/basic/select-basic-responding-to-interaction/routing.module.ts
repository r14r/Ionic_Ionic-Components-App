import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectBasicRespondingToInteractionComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SelectBasicRespondingToInteractionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectBasicRespondingToInteractionComponentRoutingModule {}
