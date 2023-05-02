import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionBasicComponentRoutingModule } from './routing.module';

import { AccordionBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionBasicComponentRoutingModule
  ],
  declarations: [AccordionBasicComponent]
})
export class AccordionBasicComponentModule {}
