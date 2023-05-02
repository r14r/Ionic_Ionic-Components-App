import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionCustomizationExpansionStylesComponentRoutingModule } from './routing.module';

import { AccordionCustomizationExpansionStylesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionCustomizationExpansionStylesComponentRoutingModule
  ],
  declarations: [AccordionCustomizationExpansionStylesComponent]
})
export class AccordionCustomizationExpansionStylesComponentModule {}
