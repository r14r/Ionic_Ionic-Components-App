import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridPushPullResponsiveComponentRoutingModule } from './routing.module';

import { GridPushPullResponsiveComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridPushPullResponsiveComponentRoutingModule
  ],
  declarations: [GridPushPullResponsiveComponent]
})
export class GridPushPullResponsiveComponentModule {}
