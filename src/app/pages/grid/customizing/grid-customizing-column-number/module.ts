import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridCustomizingColumnNumberComponentRoutingModule } from './routing.module';

import { GridCustomizingColumnNumberComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridCustomizingColumnNumberComponentRoutingModule
  ],
  declarations: [GridCustomizingColumnNumberComponent]
})
export class GridCustomizingColumnNumberComponentModule {}
