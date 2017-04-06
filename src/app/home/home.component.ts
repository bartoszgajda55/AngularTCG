import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers = Observable.interval(1000);
    // myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      } ,2000);
      setTimeout(() => {
        observer.next('second package');
      } ,4000);
      setTimeout(() => {
        // observer.error('this is error');
        observer.complete();
      } ,5000);
      setTimeout(() => {
        observer.error('third package');
        observer.complete();
      } ,6000);
    });
    myObservable.subscribe(
      (data: string) => {
        console.log('data: ' + data);
      },
      (error: string) => {
        console.log('error: ' + error);
      },
      () => {
        console.log('completed');
      }
    );
  }
}
