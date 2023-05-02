import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextareaLabelPlacementComponentRoutingModule } from './routing.module';

import { TextareaLabelPlacementComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextareaLabelPlacementComponentRoutingModule
  ],
  declarations: [TextareaLabelPlacementComponent]
})
export class TextareaLabelPlacementComponentModule {}
