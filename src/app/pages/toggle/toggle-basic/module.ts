import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToggleBasicComponentRoutingModule } from './routing.module';

import { ToggleBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToggleBasicComponentRoutingModule
  ],
  declarations: [ToggleBasicComponent]
})
export class ToggleBasicComponentModule {}
