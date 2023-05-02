import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreadcrumbsThemingColorsComponentRoutingModule } from './routing.module';

import { BreadcrumbsThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreadcrumbsThemingColorsComponentRoutingModule
  ],
  declarations: [BreadcrumbsThemingColorsComponent]
})
export class BreadcrumbsThemingColorsComponentModule {}
