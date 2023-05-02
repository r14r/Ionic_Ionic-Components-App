import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeTitleShowingDefaultTitleComponentRoutingModule } from './routing.module';

import { DatetimeTitleShowingDefaultTitleComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeTitleShowingDefaultTitleComponentRoutingModule
  ],
  declarations: [DatetimeTitleShowingDefaultTitleComponent]
})
export class DatetimeTitleShowingDefaultTitleComponentModule {}
