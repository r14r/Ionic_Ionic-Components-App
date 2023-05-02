import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabPositioningComponentRoutingModule } from './routing.module';

import { FabPositioningComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabPositioningComponentRoutingModule
  ],
  declarations: [FabPositioningComponent]
})
export class FabPositioningComponentModule {}
