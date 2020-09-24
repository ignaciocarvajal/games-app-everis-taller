import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameMainPageComponent } from './game-main-page.component';

const routes: Routes = [
  {
    path: '', component: GameMainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameMainPageRoutingModule { }
