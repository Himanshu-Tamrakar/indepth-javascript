import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[loggable]',
  inputs: ['text: logText', 'logText1'],
})
export class LoggableDirective {
  set text(value: string) {
    console.log(value);
  }

  set logText1(value: string) {
    console.log('logText1', value);
  }

  //   @Input('logText2')
  //   set text1(value: string) {
  //     console.log('logText2', value);
  //   }

  @Input()
  set logText2(value: object) {
    console.log('logText2', value);
  }

  @Output() readonly poliSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('Loggable Deitective instanciated');

    setTimeout(
      () => this.poliSelected.emit('Hey this is event emmited from directive!'),
      5000
    );
  }
}
