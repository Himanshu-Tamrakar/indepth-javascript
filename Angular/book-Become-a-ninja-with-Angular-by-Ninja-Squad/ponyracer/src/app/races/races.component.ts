import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ns-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css'],
})
export class RacesComponent implements OnInit {
  inputValue = new Date().getTime();
  logText: number = Date.now();

  user = {
    firstName: 'HImanshu',
    lastName: 'Tamrakar',
    date: Date.now(),
  };

  @Output() readonly poliSelected: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.inputValue = new Date().getTime();
      this.user.date = Date.now();
      this.logText = this.inputValue;
    }, 3000);
  }

  eventFromLoggableDirective(event: any) {
    console.log(event);
  }
}
