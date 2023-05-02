import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitleCollapsibleLargeTitleButtonsComponentRoutingModule } from './routing.module';

import { TitleCollapsibleLargeTitleButtonsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitleCollapsibleLargeTitleButtonsComponentRoutingModule
  ],
  declarations: [TitleCollapsibleLargeTitleButtonsComponent]
})
export class TitleCollapsibleLargeTitleButtonsComponentModule {}
