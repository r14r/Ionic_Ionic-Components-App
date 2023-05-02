import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectBasicMultipleSelectionComponentRoutingModule } from './routing.module';

import { SelectBasicMultipleSelectionComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectBasicMultipleSelectionComponentRoutingModule
  ],
  declarations: [SelectBasicMultipleSelectionComponent]
})
export class SelectBasicMultipleSelectionComponentModule {}
