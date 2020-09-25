import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'


const path = {
  getAll: '/api/games',
  create: '/api/games/create',
  getById: '/api/games/',
  update: '/api/games/update/',
  delete: '/api/games/delete/{id}'
} 

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getAll () {}
  getById () {}

  create(game: any) {
    const url = `${path.create}`;
    return this.http.post(url, game).pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  update() {}
  delete () {}


}
