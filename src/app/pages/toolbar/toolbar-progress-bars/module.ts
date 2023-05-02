import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolbarProgressBarsComponentRoutingModule } from './routing.module';

import { ToolbarProgressBarsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarProgressBarsComponentRoutingModule
  ],
  declarations: [ToolbarProgressBarsComponent]
})
export class ToolbarProgressBarsComponentModule {}
