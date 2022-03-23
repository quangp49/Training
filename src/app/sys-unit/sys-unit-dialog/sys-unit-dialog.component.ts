import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { PeriodicUnit } from '../sys-unit.component';
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

  unitCode: string;
  branchCode: string;
  unitName: string;
  unitSName: string;
  address: string;
  telNo: string;
  faxNo: string;
  email: string;
  type: number;
  status: number;
  remarks: string;
  createdUserId: string;
  createdTime: Date;
  updatedUserId: string;
  updatedTime: Date;

  branchList: PeriodicUnit[];
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
      this.title = 'Xóa Đơn Vị';
      this.titleYes = 'Xóa';
      this.message = 'Xác nhận xóa đơn vị?';
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
      this.status = this.getType(data.data.status).value;
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
    const unit: PeriodicUnit = {
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
      remarks: this.remarks,
      createdUserId: this.createdUserId,
      createdTime: this.createdTime,
      updatedUserId: this.createdUserId,
      updatedTime: this.updatedTime,
    };
    console.log(this.action, unit);

    if (this.action === this.ACTION_ADD) {
      this.serverHttp.insertUnit().subscribe(data => {
        this.dialogRef.close();
      });
    }
    else if (this.action === this.ACTION_UPDATE) {
      this.serverHttp.updateUnit().subscribe(data => {
        this.dialogRef.close();
      });
    }
    else {
      this.serverHttp.deleteUnit().subscribe(data => {
        console.log('delete test');

        this.dialogRef.close();
      });
    }
  }

  getType(type: any): any {
    if (typeof type === 'string') {
      for (const data of this.typeList) {
        if (data.value === type) {
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
        if (data.value === status) {
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
  data: 2,
  value: '2'
}];
