import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: Task[];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  toggleTaskCompletion(id: number) {
    this.taskService.toggleTaskCompletion(id);
  }

  deleteTask (id: number) {
    this.taskService.deleteTask(id);
  }

}
