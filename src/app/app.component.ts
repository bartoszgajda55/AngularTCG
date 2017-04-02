import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberToEmit: number = 0;
  @Output()
  numberEmitted = new EventEmitter<{number: number}>();
  timer: any;

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
