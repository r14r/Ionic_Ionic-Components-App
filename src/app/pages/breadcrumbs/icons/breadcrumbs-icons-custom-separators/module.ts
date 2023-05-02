import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreadcrumbsIconsCustomSeparatorsComponentRoutingModule } from './routing.module';

import { BreadcrumbsIconsCustomSeparatorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreadcrumbsIconsCustomSeparatorsComponentRoutingModule
  ],
  declarations: [BreadcrumbsIconsCustomSeparatorsComponent]
})
export class BreadcrumbsIconsCustomSeparatorsComponentModule {}
