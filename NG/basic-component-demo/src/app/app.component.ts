import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello!';

  totalCount: number = 200;

  incCount(event) {
    this.totalCount += event.incBy;
  }

}
