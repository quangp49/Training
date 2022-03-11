import { Component, AfterViewInit } from '@angular/core';
import { ServerHttpService } from '../Services/server-http.service';

/**
 * @title Basic checkboxes
 */

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {

  constructor(private serverHttp: ServerHttpService) { }

  clone: any;
  group_1: clonee = {
    name: "Lệnh",
    completed: true,
    subtasks: [],
  };

  ngAfterViewInit(): void {
    this.serverHttp.getMenu().subscribe(data => {
      this.clone = data;
      // this.test();
      this.group_1.subtasks = this.clone;
      console.log(this.group_1.subtasks);
    })
  }
  allComplete: boolean = false;

  test() {
    for (var itemm of this.clone) {
      console.log(itemm.menuName);

    }
  }

  updateAllComplete() {
    this.allComplete = this.group_1.subtasks != null && this.group_1.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.group_1.subtasks == null) {
      return false;
    }
    return this.group_1.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.group_1.subtasks == null) {
      return;
    }
    this.group_1.subtasks.forEach(t => (t.completed = completed));
  }
}

export interface clonee {
  name: string;
  completed: boolean;
  subtasks?: subtasks_ele[];
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