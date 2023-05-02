import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPerformanceMountComponentRoutingModule } from './routing.module';

import { PopoverPerformanceMountComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPerformanceMountComponentRoutingModule
  ],
  declarations: [PopoverPerformanceMountComponent]
})
export class PopoverPerformanceMountComponentModule {}
