import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionSheetRoleInfoOnDismissComponentRoutingModule } from './routing.module';

import { ActionSheetRoleInfoOnDismissComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionSheetRoleInfoOnDismissComponentRoutingModule
  ],
  declarations: [ActionSheetRoleInfoOnDismissComponent]
})
export class ActionSheetRoleInfoOnDismissComponentModule {}
