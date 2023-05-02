import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeThemingComponentRoutingModule } from './routing.module';

import { DatetimeThemingComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeThemingComponentRoutingModule
  ],
  declarations: [DatetimeThemingComponent]
})
export class DatetimeThemingComponentModule {}
