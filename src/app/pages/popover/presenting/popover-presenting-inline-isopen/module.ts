import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPresentingInlineIsopenComponentRoutingModule } from './routing.module';

import { PopoverPresentingInlineIsopenComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPresentingInlineIsopenComponentRoutingModule
  ],
  declarations: [PopoverPresentingInlineIsopenComponent]
})
export class PopoverPresentingInlineIsopenComponentModule {}
