import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThumbnailThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { ThumbnailThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThumbnailThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [ThumbnailThemingCssPropertiesComponent]
})
export class ThumbnailThemingCssPropertiesComponentModule {}
