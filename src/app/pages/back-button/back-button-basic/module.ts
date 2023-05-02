import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackButtonBasicComponentRoutingModule } from './routing.module';

import { BackButtonBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackButtonBasicComponentRoutingModule
  ],
  declarations: [BackButtonBasicComponent]
})
export class BackButtonBasicComponentModule {}
