import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkeletonTextBasicComponentRoutingModule } from './routing.module';

import { SkeletonTextBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkeletonTextBasicComponentRoutingModule
  ],
  declarations: [SkeletonTextBasicComponent]
})
export class SkeletonTextBasicComponentModule {}
