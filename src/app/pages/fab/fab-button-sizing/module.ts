import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabButtonSizingComponentRoutingModule } from './routing.module';

import { FabButtonSizingComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabButtonSizingComponentRoutingModule
  ],
  declarations: [FabButtonSizingComponent]
})
export class FabButtonSizingComponentModule {}
