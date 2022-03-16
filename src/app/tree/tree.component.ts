import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, AfterViewInit {
  menu: subtasks_ele[];

  temp: any = {};
  allCompltedTemp: any;
  tempKey: Array<string> = [];

  // allCompltedTemp = this.testFunction().allCompletedTemp;



  constructor(private serverHttp: ServerHttpService) { }
  ngOnInit(): void {

    this.testFunction().then((data) => {
      this.temp = data.test;
      this.allCompltedTemp = data.allCompletedTemp;
      this.tempKey = data.temp;

      console.log(this.tempKey)

    });

  }

  ngAfterViewInit(): void {

  }

  someComplete(key: any): boolean {
    if (this.temp[key].subtasks == null) {
      return false;
    }
    return this.temp[key].subtasks.filter((t: any) => t.completed).length > 0 && !this.allCompltedTemp[key];
  }

  updateAllComplete(key: any) {
    this.allCompltedTemp[key] = this.temp[key].subtasks != null && this.temp[key].subtasks.every((t: subtasks) => t.completed);
  }

  setAll(completed: boolean, key: any) {
    this.allCompltedTemp[key] = completed
    if (this.temp[key].subtasks == null) {
      return;
    }
    this.temp[key].subtasks.forEach((t: any) => (t.completed = completed));
  }

  async testFunction() {
    let temp: any = [];
    let allCompletedTemp: any = {};
    let test: any = {};
    await this.serverHttp.getMenu().subscribe(data => {
      this.menu = data;

      this.menu.forEach(item => {
        allCompletedTemp[item.parentCode] = false;
        if (!temp.includes(item.parentCode)) {
          temp.push(item.parentCode)
        }

        if (test[item.parentCode]) {
          test[item.parentCode].subtasks.push({ name: item.menuName, completed: false })
        }
        else {
          test[item.parentCode] = {
            name: item.parentCode,
            completed: false,
            subtasks: [
              { name: item.menuName, completed: false }
            ],
          }
        }
      })

    }, err => console.log(err))



    return {
      test,
      temp,
      allCompletedTemp
    };
  }

  onClear() {
    this.testFunction().then((data) => {
      this.temp = data.test;
      this.allCompltedTemp = data.allCompletedTemp;
      this.tempKey = data.temp;

    });
  }

  onSubmit() {
    let output: any = [];
    Object.keys(this.temp).forEach((item: any) => {
      this.temp[item].subtasks.forEach((element: any) => {
        if (element.completed) {
          output.push(this.menu.find((i) => {
            return i.parentCode == item && i.menuName == element.name;
          }))
        }
      });
    })
    console.log(output)
  }
}
interface subtasks {
  name: string;
  completed: boolean
}
export interface subtasks_ele {
  menuCode: string;
  menuName: string; // childNode
  menuUrl: string;
  parentCode: string; // parentNode
  remarks: string;
  createdUserId: string;
  createdTime: string;
  updatedUserId: string;
  updatedTime: string;
}