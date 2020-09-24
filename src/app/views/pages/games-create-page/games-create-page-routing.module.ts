import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesCreatePageComponent } from './games-create-page.component';

const routes: Routes = [
  {
    path: '', component: GamesCreatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesCreatePageRoutingModule { }
