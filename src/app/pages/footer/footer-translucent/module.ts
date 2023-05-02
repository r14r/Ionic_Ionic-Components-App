import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooterTranslucentComponentRoutingModule } from './routing.module';

import { FooterTranslucentComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterTranslucentComponentRoutingModule
  ],
  declarations: [FooterTranslucentComponent]
})
export class FooterTranslucentComponentModule {}
