import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentThemingColorsComponentRoutingModule } from './routing.module';

import { ContentThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentThemingColorsComponentRoutingModule
  ],
  declarations: [ContentThemingColorsComponent]
})
export class ContentThemingColorsComponentModule {}
