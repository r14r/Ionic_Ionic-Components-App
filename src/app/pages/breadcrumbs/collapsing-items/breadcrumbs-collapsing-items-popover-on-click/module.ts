import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreadcrumbsCollapsingItemsPopoverOnClickComponentRoutingModule } from './routing.module';

import { BreadcrumbsCollapsingItemsPopoverOnClickComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreadcrumbsCollapsingItemsPopoverOnClickComponentRoutingModule
  ],
  declarations: [BreadcrumbsCollapsingItemsPopoverOnClickComponent]
})
export class BreadcrumbsCollapsingItemsPopoverOnClickComponentModule {}
