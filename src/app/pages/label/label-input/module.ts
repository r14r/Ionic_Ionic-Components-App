import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabelInputComponentRoutingModule } from './routing.module';

import { LabelInputComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabelInputComponentRoutingModule
  ],
  declarations: [LabelInputComponent]
})
export class LabelInputComponentModule {}
