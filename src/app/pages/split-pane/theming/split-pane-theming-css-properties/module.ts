import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplitPaneThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { SplitPaneThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplitPaneThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [SplitPaneThemingCssPropertiesComponent]
})
export class SplitPaneThemingCssPropertiesComponentModule {}
