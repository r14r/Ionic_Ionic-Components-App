import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectObjectsAsValuesMultipleSelectionComponentRoutingModule } from './routing.module';

import { SelectObjectsAsValuesMultipleSelectionComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectObjectsAsValuesMultipleSelectionComponentRoutingModule
  ],
  declarations: [SelectObjectsAsValuesMultipleSelectionComponent]
})
export class SelectObjectsAsValuesMultipleSelectionComponentModule {}
