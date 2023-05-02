import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridOffsetResponsiveComponentRoutingModule } from './routing.module';

import { GridOffsetResponsiveComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridOffsetResponsiveComponentRoutingModule
  ],
  declarations: [GridOffsetResponsiveComponent]
})
export class GridOffsetResponsiveComponentModule {}
