import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectBasicRespondingToInteractionComponentRoutingModule } from './routing.module';

import { SelectBasicRespondingToInteractionComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectBasicRespondingToInteractionComponentRoutingModule
  ],
  declarations: [SelectBasicRespondingToInteractionComponent]
})
export class SelectBasicRespondingToInteractionComponentModule {}
