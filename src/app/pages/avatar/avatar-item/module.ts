import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarItemComponentRoutingModule } from './routing.module';

import { AvatarItemComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarItemComponentRoutingModule
  ],
  declarations: [AvatarItemComponent]
})
export class AvatarItemComponentModule {}
