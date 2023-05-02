import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionReadonlyGroupComponentRoutingModule } from './routing.module';

import { AccordionReadonlyGroupComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionReadonlyGroupComponentRoutingModule
  ],
  declarations: [AccordionReadonlyGroupComponent]
})
export class AccordionReadonlyGroupComponentModule {}
