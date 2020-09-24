import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesDetailPageComponent } from './games-detail-page.component';

const routes: Routes = [
  {
    path: '', component: GamesDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesDetailPageRoutingModule { }
