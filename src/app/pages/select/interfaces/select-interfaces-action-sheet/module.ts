import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectInterfacesActionSheetComponentRoutingModule } from './routing.module';

import { SelectInterfacesActionSheetComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectInterfacesActionSheetComponentRoutingModule
  ],
  declarations: [SelectInterfacesActionSheetComponent]
})
export class SelectInterfacesActionSheetComponentModule {}
