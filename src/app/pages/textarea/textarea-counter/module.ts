import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextareaCounterComponentRoutingModule } from './routing.module';

import { TextareaCounterComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextareaCounterComponentRoutingModule
  ],
  declarations: [TextareaCounterComponent]
})
export class TextareaCounterComponentModule {}
