import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionAccessibilityAnimationsComponentRoutingModule } from './routing.module';

import { AccordionAccessibilityAnimationsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionAccessibilityAnimationsComponentRoutingModule
  ],
  declarations: [AccordionAccessibilityAnimationsComponent]
})
export class AccordionAccessibilityAnimationsComponentModule {}
