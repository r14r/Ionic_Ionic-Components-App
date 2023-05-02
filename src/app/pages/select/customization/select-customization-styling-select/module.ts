import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectCustomizationStylingSelectComponentRoutingModule } from './routing.module';

import { SelectCustomizationStylingSelectComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectCustomizationStylingSelectComponentRoutingModule
  ],
  declarations: [SelectCustomizationStylingSelectComponent]
})
export class SelectCustomizationStylingSelectComponentModule {}
