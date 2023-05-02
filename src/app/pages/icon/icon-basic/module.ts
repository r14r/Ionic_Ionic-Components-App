import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IconBasicComponentRoutingModule } from './routing.module';

import { IconBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconBasicComponentRoutingModule
  ],
  declarations: [IconBasicComponent]
})
export class IconBasicComponentModule {}
