import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsRouterComponentRoutingModule } from './routing.module';

import { TabsRouterComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsRouterComponentRoutingModule
  ],
  declarations: [TabsRouterComponent]
})
export class TabsRouterComponentModule {}
