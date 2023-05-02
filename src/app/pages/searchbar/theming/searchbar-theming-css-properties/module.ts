import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbarThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { SearchbarThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbarThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [SearchbarThemingCssPropertiesComponent]
})
export class SearchbarThemingCssPropertiesComponentModule {}
