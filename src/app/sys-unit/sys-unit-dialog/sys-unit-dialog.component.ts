import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { SysUnit } from '../sys-unit.component';
import { ServerHttpService } from 'src/app/Services/server-http.service';

const actionList = {
  actionAdd: 'add',
  actionUpdate: 'update',
  actionDelete: 'delete',
}

@Component({
  selector: 'app-sys-unit-dialog',
  templateUrl: './sys-unit-dialog.component.html',
  styleUrls: ['./sys-unit-dialog.component.scss']
})
export class SysUnitDialogComponent {
  ACTION_ADD = actionList.actionAdd;
  ACTION_UPDATE = actionList.actionUpdate;
  ACTION_DELETE = actionList.actionDelete;

  action: string;
  message: any;
  title: any;
  titleYes: any;
  typeList: any;
  statusList: any;

  unitCode: string = '';
  branchCode: string = '';
  unitName: string = '';
  unitSName: string = '';
  address: string = '';
  telNo: string = '';
  faxNo: string = '';
  email: string = '';
  type: string = '';
  status: string = '';
  remarks: string = '';
  createdUserId: string = '';
  createdTime: Date;
  updatedUserId: string = '';
  updatedTime: Date;

  branchList: SysUnit[];
  branchCodeFilter: Observable<string[]>;
  branchCodeControl = new FormControl();

  constructor(
    private serverHttp: ServerHttpService,
    public dialogRef: MatDialogRef<SysUnitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.action = data.action;
    if (this.action === this.ACTION_ADD) {
      this.title = 'Thêm Đơn Vị';
      this.titleYes = 'Thêm';
    } else if (this.action === this.ACTION_UPDATE) {
      this.title = 'Sửa Đơn Vị';
      this.titleYes = 'Sửa';
    } else if (this.action === this.ACTION_DELETE) {
      this.title = 'Đóng Đơn Vị';
      this.titleYes = 'Đóng';
    }

    this.typeList = SYS_UNIT_TYPE;
    this.statusList = SYS_UNIT_STATUS;
    this.branchList = data.branchList;

    if (this.action !== this.ACTION_ADD) {
      this.unitCode = data.data.unitCode;
      this.branchCodeControl.setValue(data.data.branchCode);
      this.unitName = data.data.unitName;
      this.unitSName = data.data.unitSName;
      this.address = data.data.address;
      this.telNo = data.data.telNo;
      this.faxNo = data.data.faxNo;
      this.email = data.data.email;
      this.type = this.getType(data.data.type).value;
      this.status = this.getStatus(data.data.status).value;
      this.remarks = data.data.remarks;
      this.createdUserId = data.data.createdUserId;
      this.createdTime = data.data.createdTime;
      this.updatedUserId = data.data.updatedUserId;
      this.updatedTime = data.data.updatedTime;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    const unit: SysUnit = {
      unitCode: this.unitCode,
      branchCode: this.branchCodeControl.value,
      unitName: this.unitName,
      unitSName: this.unitSName,
      address: this.address,
      telNo: this.telNo,
      faxNo: this.faxNo,
      email: this.email,
      type: this.type,
      status: this.status,
      remarks: this.remarks
    };
    console.log('test ', unit);
    if (this.action === this.ACTION_ADD) {
      this.serverHttp.insertUnit(unit).subscribe(data => {
        console.log('insert test', data);
        this.dialogRef.close();
      }, err => console.log(err)
      );
    }
    else if (this.action === this.ACTION_UPDATE) {
      this.serverHttp.updateUnit(unit).subscribe(data => {
        console.log('update test', data);
        this.dialogRef.close();
      }, err => console.log(err)
      );
    }
    else {
      this.serverHttp.deleteUnit(unit).subscribe(data => {
        console.log('delete test', data);
        this.dialogRef.close();
      }, err => console.log(err)
      );
    }
  }

  getType(type: any): any {
    if (typeof type === 'string') {
      for (const data of this.typeList) {
        if (data.name === type) {
          return data;
        }
      }
    } else {
      for (const data of this.typeList) {
        if (data.data === type) {
          return data;
        }
      }
    }
    return '';
  }

  getStatus(status: any): any {
    if (typeof status === 'string') {
      for (const data of this.statusList) {
        if (data.name === status) {
          return data;
        }
      }
    } else {
      for (const data of this.statusList) {
        if (data.data === status) {
          return data;
        }
      }
    }
    return '';
  }

  ngOnInit(): void {
  }
}
export const SYS_UNIT_TYPE = [{
  name: 'Điểm giao dịch',
  data: 1,
  value: '1'
},
{
  name: 'Đại lý',
  data: 2,
  value: '2'
}];
export const SYS_UNIT_STATUS = [{
  name: 'Mở',
  data: 1,
  value: '1'
}, {
  name: 'Đóng',
  data: 9,
  value: '9'
}];
