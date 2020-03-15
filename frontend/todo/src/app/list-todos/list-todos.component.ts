import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor (
    public id: numer,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // todos = [
  //   {id: 1, description: 'Learn to Dance'},
  //   {id: 2, description: 'Learn to Dance'},
  //   {id: 3, description: 'Learn to Dance'}
  // ] 
  // // a melhor prática é ter uma classe para ter todos esses

  todos = [
  new Todo(1, 'Learn', false, new Date()),
  new Todo(2, 'Learn', false, new Date()),
  new Todo(2, 'Learn', false, new Date()),
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
