import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolbarSearchbarsComponentRoutingModule } from './routing.module';

import { ToolbarSearchbarsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarSearchbarsComponentRoutingModule
  ],
  declarations: [ToolbarSearchbarsComponent]
})
export class ToolbarSearchbarsComponentModule {}
