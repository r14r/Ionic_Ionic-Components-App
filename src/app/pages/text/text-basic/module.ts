import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextBasicComponentRoutingModule } from './routing.module';

import { TextBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextBasicComponentRoutingModule
  ],
  declarations: [TextBasicComponent]
})
export class TextBasicComponentModule {}
