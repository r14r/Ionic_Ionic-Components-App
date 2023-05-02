import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectInterfacesActionSheetComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SelectInterfacesActionSheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectInterfacesActionSheetComponentRoutingModule {}
