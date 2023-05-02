import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolbarBasicComponentRoutingModule } from './routing.module';

import { ToolbarBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarBasicComponentRoutingModule
  ],
  declarations: [ToolbarBasicComponent]
})
export class ToolbarBasicComponentModule {}
