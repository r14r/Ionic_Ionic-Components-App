import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioBasicComponentRoutingModule } from './routing.module';

import { RadioBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioBasicComponentRoutingModule
  ],
  declarations: [RadioBasicComponent]
})
export class RadioBasicComponentModule {}
