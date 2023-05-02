import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackdropBasicComponentRoutingModule } from './routing.module';

import { BackdropBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackdropBasicComponentRoutingModule
  ],
  declarations: [BackdropBasicComponent]
})
export class BackdropBasicComponentModule {}
