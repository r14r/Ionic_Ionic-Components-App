import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgBasicComponentRoutingModule } from './routing.module';

import { ImgBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgBasicComponentRoutingModule
  ],
  declarations: [ImgBasicComponent]
})
export class ImgBasicComponentModule {}
