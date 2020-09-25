import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameApiService } from 'src/app/core/services/game-api.service';

@Component({
  selector: 'games-games-create-page',
  templateUrl: './games-create-page.component.html',
  styleUrls: ['./games-create-page.component.scss']
})
export class GamesCreatePageComponent implements OnInit {
  data: any;
  constructor(
    private readonly api: GameApiService,
    private readonly router: Router,
  ) { }

  modify: any = { title: 'test', price: 23 };
  ngOnInit(): void {
  }
  // {
  //   "_id": "5f6265d254eea33b9450fef3",
  //   "title": "juego 2",
  //   "description": "test description",
  //   "price": 2,
  //   "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51n4UOjqVEL._SX385_.jpg",
  //   "category": "PS4"
  // }
  post(form: any){
    form.description = ' The Himalayas is a mountain range in Asia.'
    form.imageUrl = 'https://images-na.ssl-images-amazon.com/images/I/81%2Bj%2BsmeJGL._SL1500_.jpg'
    form.category = 'PC'
    this.api.create(form).subscribe((response: any) => {
      this.router.navigate(['games']);
    });
    this.data = form;
  }

}
