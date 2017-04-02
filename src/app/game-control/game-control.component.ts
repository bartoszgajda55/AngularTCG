import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  numberToEmit: number = 0;
  @Output()
  numberEmitted = new EventEmitter<{number: number}>();
  timer: any;

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.timer = setInterval(() => {
      this.numberEmitted.emit({number: this.numberToEmit++});
      console.log(this.numberToEmit);
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.timer);
  }
}
