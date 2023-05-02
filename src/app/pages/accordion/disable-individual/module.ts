import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionDisableIndividualComponentRoutingModule } from './routing.module';

import { AccordionDisableIndividualComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionDisableIndividualComponentRoutingModule
  ],
  declarations: [AccordionDisableIndividualComponent]
})
export class AccordionDisableIndividualComponentModule {}
