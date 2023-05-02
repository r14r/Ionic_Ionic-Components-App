import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridOffsetComponentRoutingModule } from './routing.module';

import { GridOffsetComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridOffsetComponentRoutingModule
  ],
  declarations: [GridOffsetComponent]
})
export class GridOffsetComponentModule {}
