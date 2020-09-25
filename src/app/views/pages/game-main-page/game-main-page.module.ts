import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameMainPageRoutingModule } from './game-main-page-routing.module';
import { GameMainPageComponent } from './game-main-page.component';
import { CardListModule } from '../../ui-components/card-list/card-list.module';
 


@NgModule({
  declarations: [GameMainPageComponent],
  imports: [
    CommonModule,
    GameMainPageRoutingModule,
    CardListModule
  ],
  exports: [GameMainPageComponent]
})
export class GameMainPageModule { }
