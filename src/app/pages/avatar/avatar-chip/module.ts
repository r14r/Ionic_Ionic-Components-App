import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarChipComponentRoutingModule } from './routing.module';

import { AvatarChipComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarChipComponentRoutingModule
  ],
  declarations: [AvatarChipComponent]
})
export class AvatarChipComponentModule {}
