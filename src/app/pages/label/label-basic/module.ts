import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabelBasicComponentRoutingModule } from './routing.module';

import { LabelBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabelBasicComponentRoutingModule
  ],
  declarations: [LabelBasicComponent]
})
export class LabelBasicComponentModule {}
