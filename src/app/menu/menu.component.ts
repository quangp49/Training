import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../Services/server-http.service';

/**
 * @title Basic checkboxes
 */

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private serverHttp: ServerHttpService) { }

  clone: subtasks_ele[];

  ngOnInit(): void {
    this.serverHttp.getMenu().subscribe(data => {
      this.clone = data;
      this.task.subtasks = this.groupBy(this.clone, 'parentCode');
      // this.task.subtasks = this.clone;
      console.log(this.task.subtasks);
    })
  }
  allComplete: boolean = false;

  task: task_ele = {
    name: '',
    completed: true,
    subtasks: [],
  };

  groupBy(objectArray: any, property: any) {
    return objectArray.reduce((acc: any, obj: any) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      // Add object to list for given key's value
      acc[key].push(obj);
      return acc;
    }, {});
  }
  test() {
    this.task.subtasks.forEach(subtask => {

    });
  }
  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
}
export interface task_ele {
  name: string;
  completed: boolean;
  subtasks: subtasks_ele[];
}
export interface subtasks_ele {
  menuCode: string,
  menuName: string,
  menuUrl: string,
  parentCode: string,
  remarks: string,
  createdUserId: string,
  createdTime: string,
  updateUserId: string,
  updateTime: string,
  completed: boolean,
}