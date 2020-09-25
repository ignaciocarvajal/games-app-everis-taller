import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() GoPageCreate: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  goCreate($event: any){
    this.GoPageCreate.emit();
  }

}
