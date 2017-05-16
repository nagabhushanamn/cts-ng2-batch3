import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  constructor() { }

  @Output()
  delete = new EventEmitter();

  @Input()
  messages: any[];

  ngOnInit() {
  }

  handleTrashIconClick(messageIdx) {
    this.delete.emit({ idx: messageIdx });
  }

}
