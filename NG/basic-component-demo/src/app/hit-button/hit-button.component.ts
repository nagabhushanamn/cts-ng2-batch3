import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-hit-button',
  templateUrl: './hit-button.component.html',
  styleUrls: ['./hit-button.component.css']
})
export class HitButtonComponent implements OnInit {


  @Input()
  incBy: number;

  @Output()
  onHit = new EventEmitter();

  constructor() {
    console.log('HitButtonComponent instance created..');
  }

  ngOnInit() {
  }

  handleClick() {
    this.onHit.emit({ incBy: this.incBy });
  }

}
