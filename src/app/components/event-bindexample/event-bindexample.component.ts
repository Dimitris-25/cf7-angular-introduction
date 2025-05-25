import { Component } from '@angular/core';

@Component({
  selector: 'app-event-bindexample',
  imports: [],
  templateUrl: './event-bindexample.component.html',
  styleUrl: './event-bindexample.component.css'
})
export class EventBindexampleComponent {
  times: number = 0;
  userInput: string = '';

  incrementTimes() {
    // this.times = this.times + 1
    this.times++;
  }

  decrementTimes() {
    // this.times = this.times - 1
    this.times--;
  }

  reset() {
    this.times = 0;
  }

}
