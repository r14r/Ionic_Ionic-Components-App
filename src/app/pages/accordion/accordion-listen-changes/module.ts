import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionListenChangesComponentRoutingModule } from './routing.module';

import { AccordionListenChangesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionListenChangesComponentRoutingModule
  ],
  declarations: [AccordionListenChangesComponent]
})
export class AccordionListenChangesComponentModule {}
