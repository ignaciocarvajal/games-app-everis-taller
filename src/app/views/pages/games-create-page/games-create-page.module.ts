import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesCreatePageRoutingModule } from './games-create-page-routing.module';
import { GamesCreatePageComponent } from './games-create-page.component';
import { FormModule } from '../../ui-components/form/form.module';


@NgModule({
  declarations: [ GamesCreatePageComponent ],
  imports: [
    CommonModule,
    GamesCreatePageRoutingModule,
    FormModule
  ],
  exports: [ GamesCreatePageComponent ]
})
export class GamesCreatePageModule { }
