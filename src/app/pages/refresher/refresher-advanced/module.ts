import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefresherAdvancedComponentRoutingModule } from './routing.module';

import { RefresherAdvancedComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefresherAdvancedComponentRoutingModule
  ],
  declarations: [RefresherAdvancedComponent]
})
export class RefresherAdvancedComponentModule {}
