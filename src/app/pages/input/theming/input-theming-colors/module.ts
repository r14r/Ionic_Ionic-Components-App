import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputThemingColorsComponentRoutingModule } from './routing.module';

import { InputThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputThemingColorsComponentRoutingModule
  ],
  declarations: [InputThemingColorsComponent]
})
export class InputThemingColorsComponentModule {}
