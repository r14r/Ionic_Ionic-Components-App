import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioJustifyComponentRoutingModule } from './routing.module';

import { RadioJustifyComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioJustifyComponentRoutingModule
  ],
  declarations: [RadioJustifyComponent]
})
export class RadioJustifyComponentModule {}
