import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarBasicComponentRoutingModule } from './routing.module';

import { AvatarBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarBasicComponentRoutingModule
  ],
  declarations: [AvatarBasicComponent]
})
export class AvatarBasicComponentModule {}
