import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavNavLinkComponentRoutingModule } from './routing.module';

import { NavNavLinkComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavNavLinkComponentRoutingModule
  ],
  declarations: [NavNavLinkComponent]
})
export class NavNavLinkComponentModule {}
