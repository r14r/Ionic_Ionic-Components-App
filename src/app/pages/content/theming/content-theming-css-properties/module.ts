import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { ContentThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [ContentThemingCssPropertiesComponent]
})
export class ContentThemingCssPropertiesComponentModule {}
