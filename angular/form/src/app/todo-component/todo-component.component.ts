import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


interface ITodo {
  id: number;
  content: string;
  complete: boolean;
}
let index = 1;


@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {

  userInput = new FormControl();
  todos: Array<ITodo> = [];

  constructor() { }

  ngOnInit() {
  }
  onChange() {
    const {value} = this.userInput;
    if (value) {
      const todo: ITodo = {
        id: index++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
