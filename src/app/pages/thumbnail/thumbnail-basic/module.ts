import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThumbnailBasicComponentRoutingModule } from './routing.module';

import { ThumbnailBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThumbnailBasicComponentRoutingModule
  ],
  declarations: [ThumbnailBasicComponent]
})
export class ThumbnailBasicComponentModule {}
