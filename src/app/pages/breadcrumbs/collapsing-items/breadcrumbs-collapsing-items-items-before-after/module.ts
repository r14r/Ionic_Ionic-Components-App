import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreadcrumbsCollapsingItemsItemsBeforeAfterComponentRoutingModule } from './routing.module';

import { BreadcrumbsCollapsingItemsItemsBeforeAfterComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreadcrumbsCollapsingItemsItemsBeforeAfterComponentRoutingModule
  ],
  declarations: [BreadcrumbsCollapsingItemsItemsBeforeAfterComponent]
})
export class BreadcrumbsCollapsingItemsItemsBeforeAfterComponentModule {}
