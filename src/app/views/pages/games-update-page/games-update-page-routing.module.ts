import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesUpdatePageComponent } from './games-update-page.component';

const routes: Routes = [
  {
    path: '', component: GamesUpdatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesUpdatePageRoutingModule { }
