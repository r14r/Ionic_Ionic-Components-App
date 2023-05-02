import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioEmptySelectionComponentRoutingModule } from './routing.module';

import { RadioEmptySelectionComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioEmptySelectionComponentRoutingModule
  ],
  declarations: [RadioEmptySelectionComponent]
})
export class RadioEmptySelectionComponentModule {}
