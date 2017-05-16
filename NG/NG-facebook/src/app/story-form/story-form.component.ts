import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent implements OnInit {

  @Output()
  newStory = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleSubmit() {
    console.log('handling submit..');
    this.newStory.emit({ story: { author: 'some-one', message: 'said something' } });
  }

}
