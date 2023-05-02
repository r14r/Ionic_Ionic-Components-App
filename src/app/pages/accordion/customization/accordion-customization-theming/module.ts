import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionCustomizationThemingComponentRoutingModule } from './routing.module';

import { AccordionCustomizationThemingComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionCustomizationThemingComponentRoutingModule
  ],
  declarations: [AccordionCustomizationThemingComponent]
})
export class AccordionCustomizationThemingComponentModule {}
