import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressBarBufferComponentRoutingModule } from './routing.module';

import { ProgressBarBufferComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarBufferComponentRoutingModule
  ],
  declarations: [ProgressBarBufferComponent]
})
export class ProgressBarBufferComponentModule {}
