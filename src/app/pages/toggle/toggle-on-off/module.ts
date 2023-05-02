import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToggleOnOffComponentRoutingModule } from './routing.module';

import { ToggleOnOffComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToggleOnOffComponentRoutingModule
  ],
  declarations: [ToggleOnOffComponent]
})
export class ToggleOnOffComponentModule {}
