import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectBasicSingleSelectionComponentRoutingModule } from './routing.module';

import { SelectBasicSingleSelectionComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectBasicSingleSelectionComponentRoutingModule
  ],
  declarations: [SelectBasicSingleSelectionComponent]
})
export class SelectBasicSingleSelectionComponentModule {}
