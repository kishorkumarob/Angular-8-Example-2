import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-centre',
  templateUrl: './game-centre.component.html',
  styleUrls: ['./game-centre.component.css']
})
export class GameCentreComponent implements OnInit {

  @Output() intervalFire = new EventEmitter <number>();
  interval;
  number = 0;
  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.interval = setInterval(() => {
      this.intervalFire.emit(this.number + 1);
      this.number++;
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.interval);
  }

}
