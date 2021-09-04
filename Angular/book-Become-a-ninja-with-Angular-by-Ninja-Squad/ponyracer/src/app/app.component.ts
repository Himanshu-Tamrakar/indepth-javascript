import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ponyracer';

  constructor(private http: HttpClient) {
    http
      .jsonp<{ data: Array<any> }>(
        'https://api.github.com/orgs/Ninja-Squad/repos',
        'callback'
      )
      .pipe(
        // extract data
        map((res: { data: Array<any> }) => res.data)
      )
      .subscribe((response) => {
        // will return the public repos of Ninja-Squad
        console.log('Hey Hey Hey', response);
      });
  }
}
