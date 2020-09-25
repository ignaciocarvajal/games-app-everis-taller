import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'games-games-create-page',
  templateUrl: './games-create-page.component.html',
  styleUrls: ['./games-create-page.component.scss']
})
export class GamesCreatePageComponent implements OnInit {
  data: any;
  constructor() { }
  modify: any = { title: 'test', price: 23 };
  ngOnInit(): void {
  }

  post(form: any){
 
    
    this.data = form;
  }

}
