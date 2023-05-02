import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderBasicComponentRoutingModule } from './routing.module';

import { HeaderBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderBasicComponentRoutingModule
  ],
  declarations: [HeaderBasicComponent]
})
export class HeaderBasicComponentModule {}
