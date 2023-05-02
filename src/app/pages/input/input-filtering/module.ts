import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputFilteringComponentRoutingModule } from './routing.module';

import { InputFilteringComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputFilteringComponentRoutingModule
  ],
  declarations: [InputFilteringComponent]
})
export class InputFilteringComponentModule {}
