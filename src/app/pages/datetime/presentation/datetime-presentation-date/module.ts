import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimePresentationDateComponentRoutingModule } from './routing.module';

import { DatetimePresentationDateComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimePresentationDateComponentRoutingModule
  ],
  declarations: [DatetimePresentationDateComponent]
})
export class DatetimePresentationDateComponentModule {}
