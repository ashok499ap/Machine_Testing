import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoViewComponent } from './todo-view/todo-view.component';

const routes: Routes = [
  { path: "", redirectTo: "todo-list-view", pathMatch: "full" },

  {
    
    path: "todo-list-view",
    component: TodoViewComponent,
    pathMatch: "full",
  },
  {
    path: "add-new-todo",
    component: AddTodoComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
