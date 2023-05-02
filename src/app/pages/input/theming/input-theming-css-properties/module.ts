import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { InputThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [InputThemingCssPropertiesComponent]
})
export class InputThemingCssPropertiesComponentModule {}
