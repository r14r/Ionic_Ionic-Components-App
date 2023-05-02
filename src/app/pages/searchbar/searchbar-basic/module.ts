import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbarBasicComponentRoutingModule } from './routing.module';

import { SearchbarBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbarBasicComponentRoutingModule
  ],
  declarations: [SearchbarBasicComponent]
})
export class SearchbarBasicComponentModule {}
