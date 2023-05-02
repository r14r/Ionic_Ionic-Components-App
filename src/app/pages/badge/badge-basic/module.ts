import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeBasicComponentRoutingModule } from './routing.module';

import { BadgeBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeBasicComponentRoutingModule
  ],
  declarations: [BadgeBasicComponent]
})
export class BadgeBasicComponentModule {}
