import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionDisableGroupComponentRoutingModule } from './routing.module';

import { AccordionDisableGroupComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionDisableGroupComponentRoutingModule
  ],
  declarations: [AccordionDisableGroupComponent]
})
export class AccordionDisableGroupComponentModule {}
