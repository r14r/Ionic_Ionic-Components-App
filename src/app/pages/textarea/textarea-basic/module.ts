import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextareaBasicComponentRoutingModule } from './routing.module';

import { TextareaBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextareaBasicComponentRoutingModule
  ],
  declarations: [TextareaBasicComponent]
})
export class TextareaBasicComponentModule {}
