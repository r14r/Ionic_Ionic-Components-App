import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangePinsComponentRoutingModule } from './routing.module';

import { RangePinsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangePinsComponentRoutingModule
  ],
  declarations: [RangePinsComponent]
})
export class RangePinsComponentModule {}
