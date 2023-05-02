import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpinnerBasicComponentRoutingModule } from './routing.module';

import { SpinnerBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpinnerBasicComponentRoutingModule
  ],
  declarations: [SpinnerBasicComponent]
})
export class SpinnerBasicComponentModule {}
