import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooterNoBorderComponentRoutingModule } from './routing.module';

import { FooterNoBorderComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterNoBorderComponentRoutingModule
  ],
  declarations: [FooterNoBorderComponent]
})
export class FooterNoBorderComponentModule {}
