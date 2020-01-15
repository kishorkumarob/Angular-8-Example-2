import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddnumbers: number[] = [];
  evennumbers: number[] = [];

  onIntervalFired(intervalData: number) {
    //console.log(intervalData);
    if (intervalData % 2 == 0) {
      this.evennumbers.push(intervalData);
    } else {
      this.oddnumbers.push(intervalData);
    }
  }
}
