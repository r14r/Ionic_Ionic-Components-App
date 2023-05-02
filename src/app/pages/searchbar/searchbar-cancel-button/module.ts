import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbarCancelButtonComponentRoutingModule } from './routing.module';

import { SearchbarCancelButtonComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbarCancelButtonComponentRoutingModule
  ],
  declarations: [SearchbarCancelButtonComponent]
})
export class SearchbarCancelButtonComponentModule {}
