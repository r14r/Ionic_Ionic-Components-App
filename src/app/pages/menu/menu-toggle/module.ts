import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuToggleComponentRoutingModule } from './routing.module';

import { MenuToggleComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuToggleComponentRoutingModule
  ],
  declarations: [MenuToggleComponent]
})
export class MenuToggleComponentModule {}
