import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionMultipleComponentRoutingModule } from './routing.module';

import { AccordionMultipleComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionMultipleComponentRoutingModule
  ],
  declarations: [AccordionMultipleComponent]
})
export class AccordionMultipleComponentModule {}
