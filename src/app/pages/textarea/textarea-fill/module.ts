import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextareaFillComponentRoutingModule } from './routing.module';

import { TextareaFillComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextareaFillComponentRoutingModule
  ],
  declarations: [TextareaFillComponent]
})
export class TextareaFillComponentModule {}
