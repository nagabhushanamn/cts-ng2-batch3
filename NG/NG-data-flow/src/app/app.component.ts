import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG - data flow';

  messages: any[] = [
    "Hi",
    "Hey",
    "Hello",
  ];

  addNewMessage(event, messageField) {
    event.preventDefault();
    // console.log(newMessage);
    this.messages.push(messageField.value);
    messageField.value = "";
  }

  deleteMessage(event) {
    this.messages = this.messages.filter((message, idx) => idx !== event.idx);
  }


}
