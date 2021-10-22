import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoComment: any;
  randomKey: string;
  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }
  /**
   * Add the new todo
   */
  addNewTodo() {
    this.randomKey = (Math.random() + 1).toString(36).substring(5);
    var arr = [];

    if (this.todoComment) {
    var data = {
        todoComment: this.todoComment,
        randomKey: this.randomKey,
        isRead: false
      }

      if (localStorage.getItem('todoList')) {
        arr = JSON.parse(localStorage.getItem('todoList'))
        arr.push(data);
        localStorage.setItem('todoList', JSON.stringify(arr))
      } else {
        localStorage.setItem('todoList', JSON.stringify([data]));
      }
      alert('Todo Added Successfully');
      this.todoComment = ''
      this.router.navigate(['todo-list-view']);
    } else {
      alert('please enter todo field')
    }
  }


  goBack() {
    this.router.navigate(['todo-list-view'])
  }
}
