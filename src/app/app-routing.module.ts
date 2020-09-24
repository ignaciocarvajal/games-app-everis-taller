import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameMainPageModule } from './views/pages/game-main-page/game-main-page.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    loadChildren: () => import('./views/pages/game-main-page/game-main-page.module').then(
      (m) => m.GameMainPageModule
    )
  },
  {
    path: 'create',
    loadChildren: () => import('./views/pages/games-create-page/games-create-page.module').then(
      (m) => m.GamesCreatePageModule
    )
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./views/pages/games-detail-page/games-detail-page.module').then(
      (m) => m.GamesDetailPageModule
    )
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./views/pages/games-update-page/games-update-page.module').then(
      (m) => m.GamesUpdatePageModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
