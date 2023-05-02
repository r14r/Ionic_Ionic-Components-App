import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuBasicComponentRoutingModule } from './routing.module';

import { MenuBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuBasicComponentRoutingModule
  ],
  declarations: [MenuBasicComponent]
})
export class MenuBasicComponentModule {}
