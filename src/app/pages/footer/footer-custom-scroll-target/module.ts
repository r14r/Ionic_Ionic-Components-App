import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooterCustomScrollTargetComponentRoutingModule } from './routing.module';

import { FooterCustomScrollTargetComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterCustomScrollTargetComponentRoutingModule
  ],
  declarations: [FooterCustomScrollTargetComponent]
})
export class FooterCustomScrollTargetComponentModule {}
