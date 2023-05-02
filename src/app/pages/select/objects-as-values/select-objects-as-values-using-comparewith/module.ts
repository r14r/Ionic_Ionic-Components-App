import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectObjectsAsValuesUsingComparewithComponentRoutingModule } from './routing.module';

import { SelectObjectsAsValuesUsingComparewithComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectObjectsAsValuesUsingComparewithComponentRoutingModule
  ],
  declarations: [SelectObjectsAsValuesUsingComparewithComponent]
})
export class SelectObjectsAsValuesUsingComparewithComponentModule {}
