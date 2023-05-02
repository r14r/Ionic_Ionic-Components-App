import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbarDebounceComponentRoutingModule } from './routing.module';

import { SearchbarDebounceComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbarDebounceComponentRoutingModule
  ],
  declarations: [SearchbarDebounceComponent]
})
export class SearchbarDebounceComponentModule {}
