import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavModalNavigationComponentRoutingModule } from './routing.module';

import { NavModalNavigationComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavModalNavigationComponentRoutingModule
  ],
  declarations: [NavModalNavigationComponent]
})
export class NavModalNavigationComponentModule {}
