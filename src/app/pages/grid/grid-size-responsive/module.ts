import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridSizeResponsiveComponentRoutingModule } from './routing.module';

import { GridSizeResponsiveComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridSizeResponsiveComponentRoutingModule
  ],
  declarations: [GridSizeResponsiveComponent]
})
export class GridSizeResponsiveComponentModule {}
