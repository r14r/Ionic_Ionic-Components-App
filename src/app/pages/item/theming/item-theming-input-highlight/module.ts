import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemThemingInputHighlightComponentRoutingModule } from './routing.module';

import { ItemThemingInputHighlightComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemThemingInputHighlightComponentRoutingModule
  ],
  declarations: [ItemThemingInputHighlightComponent]
})
export class ItemThemingInputHighlightComponentModule {}
