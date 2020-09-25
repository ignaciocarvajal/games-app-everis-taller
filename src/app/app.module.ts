import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesDetailPageModule } from './views/pages/games-detail-page/games-detail-page.module';
import { GameMainPageModule } from './views/pages/game-main-page/game-main-page.module';
import { GamesCreatePageModule } from './views/pages/games-create-page/games-create-page.module';
import { GamesUpdatePageModule } from './views/pages/games-update-page/games-update-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule  } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardListComponent } from './views/ui-components/card-list/card-list.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GamesDetailPageModule,
    GameMainPageModule,
    GamesCreatePageModule,
    GamesUpdatePageModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
