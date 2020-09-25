import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'


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

  getAll (): Observable<any[]> {
    const url = `${path.getAll}`;
    return this.http.get(url).pipe(
      map((res: any[]) => res)
    );
  }
  getById (id: string) {
    const url = `${path.getById}${id}`;
    return this.http.get(url).pipe(
      map( (response: any) => {
        return response;
      })
    )
  }

  create(game: any) {
    const url = `${path.create}`;
    return this.http.post(url, game).pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  update(id: string, game: any) {
    const url = `${path.update}${id}`;
    return this.http.put(url, game).pipe(
      map((res: any) => {
        return res
      })
    )
  }
  
  delete (id: string) {
    const url = `${path.delete}${id}`;
    return this.http.delete(id).pipe(
      map((res: any) => {
        return res;
      })
    )
  }


}
