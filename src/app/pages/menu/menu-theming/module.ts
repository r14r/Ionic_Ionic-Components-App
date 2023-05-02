import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuThemingComponentRoutingModule } from './routing.module';

import { MenuThemingComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuThemingComponentRoutingModule
  ],
  declarations: [MenuThemingComponent]
})
export class MenuThemingComponentModule {}
