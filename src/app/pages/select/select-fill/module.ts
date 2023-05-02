import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectFillComponentRoutingModule } from './routing.module';

import { SelectFillComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectFillComponentRoutingModule
  ],
  declarations: [SelectFillComponent]
})
export class SelectFillComponentModule {}
