import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'games-games-update-page',
  templateUrl: './games-update-page.component.html',
  styleUrls: ['./games-update-page.component.scss']
})
export class GamesUpdatePageComponent implements OnInit {
  id: string;
  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    })
  }

}
