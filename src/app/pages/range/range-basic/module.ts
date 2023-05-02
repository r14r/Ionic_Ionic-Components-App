import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangeBasicComponentRoutingModule } from './routing.module';

import { RangeBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangeBasicComponentRoutingModule
  ],
  declarations: [RangeBasicComponent]
})
export class RangeBasicComponentModule {}
