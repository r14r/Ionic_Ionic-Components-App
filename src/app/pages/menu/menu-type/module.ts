import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuTypeComponentRoutingModule } from './routing.module';

import { MenuTypeComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuTypeComponentRoutingModule
  ],
  declarations: [MenuTypeComponent]
})
export class MenuTypeComponentModule {}
