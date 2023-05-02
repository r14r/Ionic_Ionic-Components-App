import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbarClearButtonComponentRoutingModule } from './routing.module';

import { SearchbarClearButtonComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbarClearButtonComponentRoutingModule
  ],
  declarations: [SearchbarClearButtonComponent]
})
export class SearchbarClearButtonComponentModule {}
