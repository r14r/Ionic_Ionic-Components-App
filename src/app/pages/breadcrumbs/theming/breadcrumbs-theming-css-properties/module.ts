import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreadcrumbsThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { BreadcrumbsThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreadcrumbsThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [BreadcrumbsThemingCssPropertiesComponent]
})
export class BreadcrumbsThemingCssPropertiesComponentModule {}
