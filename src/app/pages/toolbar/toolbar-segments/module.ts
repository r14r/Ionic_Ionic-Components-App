import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolbarSegmentsComponentRoutingModule } from './routing.module';

import { ToolbarSegmentsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarSegmentsComponentRoutingModule
  ],
  declarations: [ToolbarSegmentsComponent]
})
export class ToolbarSegmentsComponentModule {}
