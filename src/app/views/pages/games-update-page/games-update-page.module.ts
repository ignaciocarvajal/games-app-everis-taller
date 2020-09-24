import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesUpdatePageRoutingModule } from './games-update-page-routing.module';
import { GamesUpdatePageComponent } from './games-update-page.component';


@NgModule({
  declarations: [ GamesUpdatePageComponent ],
  imports: [
    CommonModule,
    GamesUpdatePageRoutingModule
  ],
  exports: [ GamesUpdatePageComponent ]
})
export class GamesUpdatePageModule { }
