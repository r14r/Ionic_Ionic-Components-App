import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridVerticalAlignmentComponentRoutingModule } from './routing.module';

import { GridVerticalAlignmentComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridVerticalAlignmentComponentRoutingModule
  ],
  declarations: [GridVerticalAlignmentComponent]
})
export class GridVerticalAlignmentComponentModule {}
