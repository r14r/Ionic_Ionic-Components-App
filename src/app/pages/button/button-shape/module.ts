import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonShapeComponentRoutingModule } from './routing.module';

import { ButtonShapeComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonShapeComponentRoutingModule
  ],
  declarations: [ButtonShapeComponent]
})
export class ButtonShapeComponentModule {}
