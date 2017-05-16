import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Facebook';
  stories: Array<any> = [
    { author: 'Nagabhushanam', message: 'ng is awesome f.w now' },
    { author: 'Annoy', message: 'no bus service in chennai today' }
  ]

  addNewStory(event) {
    console.log('adding new story');
    this.stories.push(event.story);
  }

}
