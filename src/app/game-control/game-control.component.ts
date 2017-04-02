import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  numberToEmit: number = 0;
  @Output()
  numberEmitted = new EventEmitter<number>();
  timer: any;

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.timer = setInterval(() => {
      this.numberEmitted.emit(++this.numberToEmit);
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.timer);
  }
}
