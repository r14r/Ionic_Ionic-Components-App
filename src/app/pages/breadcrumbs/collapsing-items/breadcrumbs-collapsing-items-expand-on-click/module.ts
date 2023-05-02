import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreadcrumbsCollapsingItemsExpandOnClickComponentRoutingModule } from './routing.module';

import { BreadcrumbsCollapsingItemsExpandOnClickComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreadcrumbsCollapsingItemsExpandOnClickComponentRoutingModule
  ],
  declarations: [BreadcrumbsCollapsingItemsExpandOnClickComponent]
})
export class BreadcrumbsCollapsingItemsExpandOnClickComponentModule {}
