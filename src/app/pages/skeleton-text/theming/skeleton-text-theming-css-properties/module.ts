import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkeletonTextThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { SkeletonTextThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkeletonTextThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [SkeletonTextThemingCssPropertiesComponent]
})
export class SkeletonTextThemingCssPropertiesComponentModule {}
