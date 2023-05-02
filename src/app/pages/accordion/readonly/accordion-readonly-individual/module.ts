import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionReadonlyIndividualComponentRoutingModule } from './routing.module';

import { AccordionReadonlyIndividualComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionReadonlyIndividualComponentRoutingModule
  ],
  declarations: [AccordionReadonlyIndividualComponent]
})
export class AccordionReadonlyIndividualComponentModule {}
