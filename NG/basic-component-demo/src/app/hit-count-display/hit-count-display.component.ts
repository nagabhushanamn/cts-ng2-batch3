import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hit-count-display',
  templateUrl: './hit-count-display.component.html',
  styleUrls: ['./hit-count-display.component.css']
})
export class HitCountDisplayComponent implements OnInit {

  @Input()
  count: number=0;

  constructor() { }

  ngOnInit() {
  }

}
