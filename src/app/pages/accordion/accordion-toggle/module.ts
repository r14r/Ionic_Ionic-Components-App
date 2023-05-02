import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionToggleComponentRoutingModule } from './routing.module';

import { AccordionToggleComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionToggleComponentRoutingModule
  ],
  declarations: [AccordionToggleComponent]
})
export class AccordionToggleComponentModule {}
