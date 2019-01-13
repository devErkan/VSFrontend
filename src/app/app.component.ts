import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalLab';

  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
    this.http.get(this.url + 'todo/all').subscribe((value) => {
      console.log(value);
    });
    this.http.delete(this.url + 'todo/ + id').subscribe((value) => {
      console.log(value);
    });
  }
}

