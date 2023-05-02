import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeDateConstraintsAdvancedComponentRoutingModule } from './routing.module';

import { DatetimeDateConstraintsAdvancedComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeDateConstraintsAdvancedComponentRoutingModule
  ],
  declarations: [DatetimeDateConstraintsAdvancedComponent]
})
export class DatetimeDateConstraintsAdvancedComponentModule {}
