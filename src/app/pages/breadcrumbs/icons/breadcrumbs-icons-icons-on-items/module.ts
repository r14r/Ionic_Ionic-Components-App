import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreadcrumbsIconsIconsOnItemsComponentRoutingModule } from './routing.module';

import { BreadcrumbsIconsIconsOnItemsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreadcrumbsIconsIconsOnItemsComponentRoutingModule
  ],
  declarations: [BreadcrumbsIconsIconsOnItemsComponent]
})
export class BreadcrumbsIconsIconsOnItemsComponentModule {}
