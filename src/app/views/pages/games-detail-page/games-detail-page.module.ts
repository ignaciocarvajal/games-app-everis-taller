import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesDetailPageRoutingModule } from './games-detail-page-routing.module';
import { GamesDetailPageComponent } from './games-detail-page.component';


@NgModule({
  declarations: [GamesDetailPageComponent],
  imports: [
    CommonModule,
    GamesDetailPageRoutingModule
  ],
  exports: [GamesDetailPageComponent]
})
export class GamesDetailPageModule { }
