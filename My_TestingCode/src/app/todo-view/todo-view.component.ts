import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {
  todoList: any = [];
  searchText
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getList()
  }

  // get the saved list
  getList() {
    this.todoList = JSON.parse(localStorage.getItem('todoList'))
  }

 
  // delete
  delete(index, key) {

    this.todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(this.todoList))

  }

  //  make as read 

  makeRead(index, key) {
    this.todoList.forEach(e => {

      if (e.randomKey == key) {
        e.isRead = true;
        localStorage.setItem('todoList', JSON.stringify(this.todoList))
      }
    });
  }

  addNewTodo() {
    this.router.navigate(['add-new-todo'])
  }
}
