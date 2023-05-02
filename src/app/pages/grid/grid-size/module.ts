import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridSizeComponentRoutingModule } from './routing.module';

import { GridSizeComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridSizeComponentRoutingModule
  ],
  declarations: [GridSizeComponent]
})
export class GridSizeComponentModule {}
