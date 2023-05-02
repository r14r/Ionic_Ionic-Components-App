import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooterBasicComponentRoutingModule } from './routing.module';

import { FooterBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterBasicComponentRoutingModule
  ],
  declarations: [FooterBasicComponent]
})
export class FooterBasicComponentModule {}
