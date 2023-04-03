import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  counter: number = 0
  
  increase(): void {
    this.counter++;
  }
  
  decrease(): void {
    this.counter--;
  }
  
  reset(): void {
    this.counter = 0;
  }
}
