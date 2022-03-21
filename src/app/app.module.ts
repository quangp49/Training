import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorIntl } from '@angular/material/paginator';

import { MaterialExampleModule } from '../material.module';
import { AppComponent } from './app.component';
import { CustomPaginator } from './Services/CustomPaginator';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { TreeComponent } from './tree/tree.component';
import { ChartComponent } from './chart/chart.component';
import { SysUnitComponent } from './sys-unit/sys-unit.component';
import { SysUnitDialogComponent } from './sys-unit/sys-unit-dialog/sys-unit-dialog.component';

@NgModule({
  declarations: [AppComponent, TableComponent, MenuComponent, TreeComponent, ChartComponent, SysUnitComponent, SysUnitDialogComponent,],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: CustomPaginator() }],
  bootstrap: [AppComponent],
})
export class AppModule { } 
