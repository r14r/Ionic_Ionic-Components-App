import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThumbnailItemComponentRoutingModule } from './routing.module';

import { ThumbnailItemComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThumbnailItemComponentRoutingModule
  ],
  declarations: [ThumbnailItemComponent]
})
export class ThumbnailItemComponentModule {}
