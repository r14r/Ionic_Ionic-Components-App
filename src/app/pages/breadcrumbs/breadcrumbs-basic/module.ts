import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreadcrumbsBasicComponentRoutingModule } from './routing.module';

import { BreadcrumbsBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreadcrumbsBasicComponentRoutingModule
  ],
  declarations: [BreadcrumbsBasicComponent]
})
export class BreadcrumbsBasicComponentModule {}
