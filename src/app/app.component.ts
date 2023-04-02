 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: string[] = [];
  todo: string = '';

  setTodo(e: KeyboardEvent) {
    this.todo = (e.target as HTMLInputElement).value;
   }

  addTodo() {
    this.todos.push(this.todo);
    console.log(this.todos)
    this.todo = '';
  }
}
