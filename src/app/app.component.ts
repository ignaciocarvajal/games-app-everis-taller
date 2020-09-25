import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'games-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'games-app';

  constructor(
    private readonly router: Router
  ) {}

  GoPageCreate($event: any) {
    console.log('GoPageCreate -->', $event);
    
    this.router.navigate(['games/create']);
  }
}
