import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectJustifyComponentRoutingModule } from './routing.module';

import { SelectJustifyComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectJustifyComponentRoutingModule
  ],
  declarations: [SelectJustifyComponent]
})
export class SelectJustifyComponentModule {}
