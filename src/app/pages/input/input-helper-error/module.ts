import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputHelperErrorComponentRoutingModule } from './routing.module';

import { InputHelperErrorComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputHelperErrorComponentRoutingModule
  ],
  declarations: [InputHelperErrorComponent]
})
export class InputHelperErrorComponentModule {}
