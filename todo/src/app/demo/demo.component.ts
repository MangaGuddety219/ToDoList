import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
    taskArray = [{ taskName: 'Brush teeth', isCompleted: false },
             {taskName:'coding',isCompleted:true}];
   
  

  constructor() { }

  ngOnInit() {
    let todoList = this.getTodoListFromLocalStorage();
    const saveTasks = localStorage.getItem('todos');
    if (saveTasks) {
      this.taskArray = JSON.parse(saveTasks);
    }
  }
  
  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })

    form.reset();
  }

  onCheck(index: number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    // console.log("manga",this.taskArray[0].taskName);
  }
  saveTasks(): void {
    localStorage.setItem('todos', JSON.stringify(this.taskArray));
  }
  getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todos");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList;
    }
}


}
