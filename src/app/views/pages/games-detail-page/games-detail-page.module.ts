import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesDetailPageRoutingModule } from './games-detail-page-routing.module';
import { GamesDetailPageComponent } from './games-detail-page.component';
import { FormModule } from '../../ui-components/form/form.module';


@NgModule({
  declarations: [GamesDetailPageComponent],
  imports: [
    CommonModule,
    GamesDetailPageRoutingModule,
    FormModule
  ],
  exports: [GamesDetailPageComponent]
})
export class GamesDetailPageModule { }
