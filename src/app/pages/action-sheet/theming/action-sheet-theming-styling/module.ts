import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionSheetThemingStylingComponentRoutingModule } from './routing.module';

import { ActionSheetThemingStylingComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionSheetThemingStylingComponentRoutingModule
  ],
  declarations: [ActionSheetThemingStylingComponent]
})
export class ActionSheetThemingStylingComponentModule {}
