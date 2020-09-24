import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesCreatePageRoutingModule } from './games-create-page-routing.module';
import { GamesCreatePageComponent } from './games-create-page.component';


@NgModule({
  declarations: [ GamesCreatePageComponent ],
  imports: [
    CommonModule,
    GamesCreatePageRoutingModule
  ],
  exports: [ GamesCreatePageComponent ]
})
export class GamesCreatePageModule { }
