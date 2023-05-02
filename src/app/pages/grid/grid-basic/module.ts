import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridBasicComponentRoutingModule } from './routing.module';

import { GridBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridBasicComponentRoutingModule
  ],
  declarations: [GridBasicComponent]
})
export class GridBasicComponentModule {}
