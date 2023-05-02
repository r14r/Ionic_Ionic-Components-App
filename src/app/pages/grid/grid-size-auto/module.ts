import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridSizeAutoComponentRoutingModule } from './routing.module';

import { GridSizeAutoComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridSizeAutoComponentRoutingModule
  ],
  declarations: [GridSizeAutoComponent]
})
export class GridSizeAutoComponentModule {}
