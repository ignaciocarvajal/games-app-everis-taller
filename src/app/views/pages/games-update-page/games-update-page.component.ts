import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { GameApiService } from 'src/app/core/services/game-api.service';

@Component({
  selector: 'games-games-update-page',
  templateUrl: './games-update-page.component.html',
  styleUrls: ['./games-update-page.component.scss']
})
export class GamesUpdatePageComponent implements OnInit {
  id: string;
  game: any;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly api: GameApiService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    });
    this.getGameById(this.id);
  }

  getGameById(id: string) {
    this.api.getById(id).pipe(
      map((res: any) => res)
    ).subscribe((reponse: any) => {
      this.game = reponse
    })
  }

  post(form: any){
   
   this.api.update(this.id, form).subscribe((res: any) => {
     alert('success');
     this.router.navigate(['/']);
   })
   
  }

}
