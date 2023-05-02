import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbarThemingColorsComponentRoutingModule } from './routing.module';

import { SearchbarThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbarThemingColorsComponentRoutingModule
  ],
  declarations: [SearchbarThemingColorsComponent]
})
export class SearchbarThemingColorsComponentModule {}
