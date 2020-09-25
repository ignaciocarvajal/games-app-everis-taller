import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GameApiService } from 'src/app/core/services/game-api.service';

@Component({
  selector: 'games-game-main-page',
  templateUrl: './game-main-page.component.html',
  styleUrls: ['./game-main-page.component.scss']
})
export class GameMainPageComponent implements OnInit {
  games: Observable<any[]>;
  constructor(
    private readonly api: GameApiService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
   this.getAllGames();
  }

  getAllGames() {
   this.games = this.api.getAll();
  }

  delete(id: string) {
   console.log('mi delete id', id);
   
  }

  edit(id: string) {
   this.router.navigate(['/games/update', id])
  }

  detail(id: string) {
    this.router.navigate(['/games/detail', id])
  }

}
