import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isParagraphDisplayed = true;
  buttonClicks = [];

  editParagraphDisplay(event) {
    this.isParagraphDisplayed = !this.isParagraphDisplayed;
    this.buttonClicks.push(event.timeStamp);
  }

  applyBackgroundColor(index) {
    if (index > 3) {
      return 'dodgerblue';
    }
  }

  applyTextColor(index) {
    if (index > 3) {
      return true;
    }
  }
}
