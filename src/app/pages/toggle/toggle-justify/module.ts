import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToggleJustifyComponentRoutingModule } from './routing.module';

import { ToggleJustifyComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToggleJustifyComponentRoutingModule
  ],
  declarations: [ToggleJustifyComponent]
})
export class ToggleJustifyComponentModule {}
