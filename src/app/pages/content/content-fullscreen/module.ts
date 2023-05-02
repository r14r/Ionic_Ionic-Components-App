import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentFullscreenComponentRoutingModule } from './routing.module';

import { ContentFullscreenComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentFullscreenComponentRoutingModule
  ],
  declarations: [ContentFullscreenComponent]
})
export class ContentFullscreenComponentModule {}
