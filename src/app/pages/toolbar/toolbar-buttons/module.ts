import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolbarButtonsComponentRoutingModule } from './routing.module';

import { ToolbarButtonsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarButtonsComponentRoutingModule
  ],
  declarations: [ToolbarButtonsComponent]
})
export class ToolbarButtonsComponentModule {}
