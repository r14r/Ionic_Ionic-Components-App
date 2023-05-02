import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridPushPullComponentRoutingModule } from './routing.module';

import { GridPushPullComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridPushPullComponentRoutingModule
  ],
  declarations: [GridPushPullComponent]
})
export class GridPushPullComponentModule {}
