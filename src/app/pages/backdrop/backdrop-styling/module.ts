import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackdropStylingComponentRoutingModule } from './routing.module';

import { BackdropStylingComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackdropStylingComponentRoutingModule
  ],
  declarations: [BackdropStylingComponent]
})
export class BackdropStylingComponentModule {}
