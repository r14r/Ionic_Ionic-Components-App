import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionSheetControllerComponentRoutingModule } from './routing.module';

import { ActionSheetControllerComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionSheetControllerComponentRoutingModule
  ],
  declarations: [ActionSheetControllerComponent]
})
export class ActionSheetControllerComponentModule {}
