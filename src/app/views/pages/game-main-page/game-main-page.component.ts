import { Component, OnInit } from '@angular/core';
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
    private readonly api: GameApiService
  ) { }

  ngOnInit(): void {
   this.getAllGames();
  }

  getAllGames() {
   this.games = this.api.getAll();
  }

}
