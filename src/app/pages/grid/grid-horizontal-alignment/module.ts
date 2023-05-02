import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridHorizontalAlignmentComponentRoutingModule } from './routing.module';

import { GridHorizontalAlignmentComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridHorizontalAlignmentComponentRoutingModule
  ],
  declarations: [GridHorizontalAlignmentComponent]
})
export class GridHorizontalAlignmentComponentModule {}
