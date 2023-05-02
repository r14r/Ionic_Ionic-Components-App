import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridCustomizingPaddingComponentRoutingModule } from './routing.module';

import { GridCustomizingPaddingComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridCustomizingPaddingComponentRoutingModule
  ],
  declarations: [GridCustomizingPaddingComponent]
})
export class GridCustomizingPaddingComponentModule {}
