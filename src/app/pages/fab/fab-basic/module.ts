import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabBasicComponentRoutingModule } from './routing.module';

import { FabBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabBasicComponentRoutingModule
  ],
  declarations: [FabBasicComponent]
})
export class FabBasicComponentModule {}
