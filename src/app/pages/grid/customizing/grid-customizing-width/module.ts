import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridCustomizingWidthComponentRoutingModule } from './routing.module';

import { GridCustomizingWidthComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridCustomizingWidthComponentRoutingModule
  ],
  declarations: [GridCustomizingWidthComponent]
})
export class GridCustomizingWidthComponentModule {}
