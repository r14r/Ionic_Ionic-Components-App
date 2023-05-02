import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectInterfacesPopoverComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SelectInterfacesPopoverComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectInterfacesPopoverComponentRoutingModule {}
