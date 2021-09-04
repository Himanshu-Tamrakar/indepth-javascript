import { Directive } from '@angular/core';

@Directive({
  selector: '[nsDoNothing]',
})
export class DoNothingDirective {
  constructor() {
    console.log('Directive Instanciated');
  }
}
