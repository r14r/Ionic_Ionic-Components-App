import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooterFadeComponentRoutingModule } from './routing.module';

import { FooterFadeComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterFadeComponentRoutingModule
  ],
  declarations: [FooterFadeComponent]
})
export class FooterFadeComponentModule {}
