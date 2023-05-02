import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionCustomizationAdvancedExpansionStylesComponentRoutingModule } from './routing.module';

import { AccordionCustomizationAdvancedExpansionStylesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionCustomizationAdvancedExpansionStylesComponentRoutingModule
  ],
  declarations: [AccordionCustomizationAdvancedExpansionStylesComponent]
})
export class AccordionCustomizationAdvancedExpansionStylesComponentModule {}
