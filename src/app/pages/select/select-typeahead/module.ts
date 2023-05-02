import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectTypeaheadComponentRoutingModule } from './routing.module';

import { SelectTypeaheadComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectTypeaheadComponentRoutingModule
  ],
  declarations: [SelectTypeaheadComponent]
})
export class SelectTypeaheadComponentModule {}
