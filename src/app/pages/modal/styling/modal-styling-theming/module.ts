import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalStylingThemingComponentRoutingModule } from './routing.module';

import { ModalStylingThemingComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalStylingThemingComponentRoutingModule
  ],
  declarations: [ModalStylingThemingComponent]
})
export class ModalStylingThemingComponentModule {}
