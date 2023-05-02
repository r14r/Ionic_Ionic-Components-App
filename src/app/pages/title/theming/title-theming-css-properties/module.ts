import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitleThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { TitleThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitleThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [TitleThemingCssPropertiesComponent]
})
export class TitleThemingCssPropertiesComponentModule {}
