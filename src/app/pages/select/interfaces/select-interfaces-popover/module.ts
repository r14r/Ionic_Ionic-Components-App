import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectInterfacesPopoverComponentRoutingModule } from './routing.module';

import { SelectInterfacesPopoverComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectInterfacesPopoverComponentRoutingModule
  ],
  declarations: [SelectInterfacesPopoverComponent]
})
export class SelectInterfacesPopoverComponentModule {}
