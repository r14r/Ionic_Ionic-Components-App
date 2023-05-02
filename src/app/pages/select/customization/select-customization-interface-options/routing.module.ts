import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectCustomizationInterfaceOptionsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SelectCustomizationInterfaceOptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectCustomizationInterfaceOptionsComponentRoutingModule {}
