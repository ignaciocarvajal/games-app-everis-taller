import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesUpdatePageRoutingModule } from './games-update-page-routing.module';
import { GamesUpdatePageComponent } from './games-update-page.component';
import { FormModule } from '../../ui-components/form/form.module';


@NgModule({
  declarations: [ GamesUpdatePageComponent ],
  imports: [
    CommonModule,
    GamesUpdatePageRoutingModule,
    FormModule
  ],
  exports: [ GamesUpdatePageComponent ]
})
export class GamesUpdatePageModule { }
