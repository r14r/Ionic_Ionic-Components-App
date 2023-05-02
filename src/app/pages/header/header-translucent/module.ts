import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderTranslucentComponentRoutingModule } from './routing.module';

import { HeaderTranslucentComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderTranslucentComponentRoutingModule
  ],
  declarations: [HeaderTranslucentComponent]
})
export class HeaderTranslucentComponentModule {}
