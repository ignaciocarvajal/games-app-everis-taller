import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'games-games-detail-page',
  templateUrl: './games-detail-page.component.html',
  styleUrls: ['./games-detail-page.component.scss']
})
export class GamesDetailPageComponent implements OnInit {
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
