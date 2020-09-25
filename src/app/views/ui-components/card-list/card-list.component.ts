import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'game-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() games: any;
  @Output() deleteGame: EventEmitter<string> = new EventEmitter<string>();
  @Output() detailGame: EventEmitter<string> = new EventEmitter<string>();
  @Output() editGame: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  delete(id: string) {
    this.deleteGame.emit(id);
  }

  edit(id: string) {
    this.editGame.emit(id);
  }

  detail(id: string) {
    this.detailGame.emit(id);
  }


}
