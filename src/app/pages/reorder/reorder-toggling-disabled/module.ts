import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReorderTogglingDisabledComponentRoutingModule } from './routing.module';

import { ReorderTogglingDisabledComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReorderTogglingDisabledComponentRoutingModule
  ],
  declarations: [ReorderTogglingDisabledComponent]
})
export class ReorderTogglingDisabledComponentModule {}
