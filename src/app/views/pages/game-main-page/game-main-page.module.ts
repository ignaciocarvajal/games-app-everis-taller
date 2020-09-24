import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameMainPageRoutingModule } from './game-main-page-routing.module';
import { GameMainPageComponent } from './game-main-page.component';


@NgModule({
  declarations: [GameMainPageComponent],
  imports: [
    CommonModule,
    GameMainPageRoutingModule
  ],
  exports: [GameMainPageComponent]
})
export class GameMainPageModule { }
