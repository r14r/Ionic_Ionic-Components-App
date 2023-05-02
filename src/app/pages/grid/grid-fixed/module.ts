import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridFixedComponentRoutingModule } from './routing.module';

import { GridFixedComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridFixedComponentRoutingModule
  ],
  declarations: [GridFixedComponent]
})
export class GridFixedComponentModule {}
