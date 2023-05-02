import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeButtonsShowingConfirmationButtonsComponentRoutingModule } from './routing.module';

import { DatetimeButtonsShowingConfirmationButtonsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeButtonsShowingConfirmationButtonsComponentRoutingModule
  ],
  declarations: [DatetimeButtonsShowingConfirmationButtonsComponent]
})
export class DatetimeButtonsShowingConfirmationButtonsComponentModule {}
