import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-to-do-liste',
  templateUrl: './to-do-liste.component.html',
  styleUrls: ['./to-do-liste.component.css']
})
export class ToDoListeComponent implements OnInit {
  url: String = 'http://localhost:8080/';
  toDoList: any;
  form: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url + 'todo/all').subscribe((value: any[]) => {

      value.map(function (item) {
        item.aufgabe = JSON.parse(item.aufgabe);
      });

      this.toDoList = value;
    });

    this.form = new FormGroup({
      aufgabe: new FormControl(),
      beschreibung: new FormControl()
    });
  }

  addListItem(formContent) {
    this.http.post(this.url + 'todo/', formContent)
      .subscribe((data) => {
        this.http.get(this.url + 'todo/all').subscribe((value: any[]) => {
          value.map(function (item) {
            item.aufgabe = JSON.parse(item.aufgabe);
          });

          this.toDoList = value;
        });
      });
  }

  deleteItem(event, item: any) {
    event.stopPropagation();
    console.log(item);

    this.http.delete(this.url + item.id)
      .subscribe((data) => {
        this.http.get(this.url + 'todo/all').subscribe((value: any[]) => {
          value.map(function (item) {
            item.aufgabe = JSON.parse(item.aufgabe);
          });
          this.toDoList = value;
        });
      });
  }
}
